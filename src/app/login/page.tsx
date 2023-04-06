import styles from './login.module.css';

export default function Login() {
    return (
        <>
            <div className='text-blue'>
                I am from login page
            </div>

            <div className={styles.textRed}>
                I am from login page
            </div>
        </>
    )
}