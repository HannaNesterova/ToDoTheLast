import styles from './../Hero/Hero.module.scss';

const PageTitle = (props) => {
    return(
        <div className={styles.hero}>
            <h1 className={styles.title}>{props.children}</h1>
            <p className={styles.subtitle}>{props.children}</p>
        </div>
    );
};

export default PageTitle; 
