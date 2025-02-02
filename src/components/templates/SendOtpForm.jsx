import { sendOtp } from "../../services/Auth";
import styles from "./../templates/SendOtp.module.css"

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    // console.log({response,error});

    if (response) setStep(2);

    if (error) console.log(error.response.data.message);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد
      </span>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <label htmlFor="input">شرایط استفاده از خدمات و حریم خصوصی دیوار را می‌پذیرم.</label>
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
