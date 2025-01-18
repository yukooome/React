import styles from './ProduitTable.module.css';

const ProduitTableRow = ({ name, description, price, promotion }) => {
    // '?'signifie 'si pas'
    const rowClass = promotion ? styles.promo : styles.normal;

    // Formater le prix en euro
    const formattedPrice = price
        ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)
        : '/';

    // Appliquer le style rose uniquement au prix en promotion
    const priceClass = promotion ? styles.promoPrice : styles.price;

    return (
        <tr className={rowClass}>
            <td>{name}</td>
            <td>{description ?? '/'}</td>
            <td className={priceClass}>
                {formattedPrice}
                {promotion && <span className={styles.promoMark}>*</span>}
            </td>
        </tr>
    );
};

const ProduitTable = ({ ProduitArray = [] }) => {
    const ProduitJSX = ProduitArray.map(produit => (
        <ProduitTableRow {...produit} key={produit.id} />
    ));

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                {ProduitJSX}
            </tbody>
        </table>
    );
};

export default ProduitTable;


// solution trop compliqué voir l'autre