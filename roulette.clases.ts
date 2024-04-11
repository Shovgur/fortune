import { Ref } from "react";

export interface chipsAttributes {
  chips_name: string;
  chip_color: string;
  chip_value: string;
  chip_win: string;
}

// КЛАСС ОРУЖИЯ
export class chips {
  id: number;
  chips_name: string;
  chip_color: string;
  chip_value: string;
  chip_win: string;

  constructor(id: number, attrs: chipsAttributes) {
    this.id = id;

    // атрибуты с сервера
    this.chips_name = attrs.chips_name;
    this.chip_color = attrs.chip_color;
    this.chip_value = attrs.chip_value;
    this.chip_win = attrs.chip_win;
  }
}

export interface rouletteAttributes {
  winner: chipsAttributes;
  chip: chipsAttributes[];

  rouletteContainerRef: Ref<HTMLElement>;
  chipRef: Ref<HTMLElement>;

  chipCount?: number;
  transitionDuration?: number;
  itemWidth?: number;
}

// КЛАСС РУЛЕТКИ
export class Roulette {
  winner: chipsAttributes;
  allchip: chipsAttributes[];

  rouletteWrapper: Ref<HTMLElement>;
  chipsWrapper: Ref<HTMLElement>;

  chip: chips[];

  chipCount: number;
  chipsPrizeId: number;

  transitionDuration: number;

  itemWidth: number;

  constructor(attrs: rouletteAttributes) {
    // атрибуты для генерации массива chip
    this.winner = attrs.winner;
    this.allchip = attrs.chip;

    this.chip = [];

    this.rouletteWrapper = attrs.chipRef;

    this.chipsWrapper = attrs.chipRef;

    this.chipCount = attrs.chipCount || 50;

    this.chipsPrizeId = this.randomRange(
      this.chipCount / 2,
      this.chipCount - 5
    );

    this.transitionDuration = attrs.transitionDuration || 10;

    this.itemWidth = attrs.itemWidth || 200;
  }

  private randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  private shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  set_chip = () => {
    let chip: chips[] = []; 
    let chips_actors_len = this.allchip.length; 

    const set_chips_actors = (from_i: number, to_i: number) => {
      let j = 0;
      const createdchip: chips[] = [];
      for (let i = from_i; i <= to_i; i += 1) {
        createdchip.push(new chips(i, this.allchip[j]));
        j = j === chips_actors_len - 1 ? 0 : j + 1;
      }
      this.shuffle(createdchip);
      return createdchip;
    };

    if (chips_actors_len === 0) {
      throw new Error("Ошибка! Нет актёров.");
    }


    chip = chip.concat(set_chips_actors(0, this.chipsPrizeId - 1));

    chip[this.chipsPrizeId] = new chips(this.chipsPrizeId, this.winner);

    chip = chip.concat(
      set_chips_actors(this.chipsPrizeId + 1, this.chipCount - 1)
    );
    this.chip = chip;
  };

  /** ВРАЩЕНИЕ РУЛЕТКИ
     -----------------------------------------------------------------------------*/
  spin = () => {
    let el_chips_width_1_2 = Math.floor(this.itemWidth / 2);
    let el_chips_width_1_20 = Math.floor(this.itemWidth / 20);

    // рандомная координата остановки
    const randStop =
      (this.chipsPrizeId - 4) * this.itemWidth +
      el_chips_width_1_2 +
      this.randomRange(el_chips_width_1_20, 18 * el_chips_width_1_20);

    // анимация теперь через 'transition', а не через 'animation'
    // 'ease-out' -- это плавное замедление рулетки
    // @ts-ignore
    this.chipsWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;

    // немного отложенный старт
    // (ибо нельзя сразу установить css-свойство 'left')
    setTimeout(() => {
      // @ts-ignore
      this.chipsWrapper!.current.style.left = `-${randStop}px`;
    }, 100);

    return this.chipsPrizeId;
  };
}
