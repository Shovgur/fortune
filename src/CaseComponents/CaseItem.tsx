import cl from "./RouletteItem.module.scss"

interface rouletteItemProps {
    id: number,
    isLoser: boolean
}

const RouletteItem = ({
                          id,
                          isLoser
                      }: rouletteItemProps) => {
    return (
        <div className={cl.evWeapon} style={isLoser ? {opacity: "0.5"} : {opacity: "1"}}>
            <div className={`${cl.evWeaponInner}`} id={String(id)}>
                <div className={cl.evWeaponText}>
                </div>
            </div>
        </div>
    );
};

export default RouletteItem;