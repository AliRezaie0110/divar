import SendOtpForm from "../components/templates/sendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import { useState } from "react";
function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
      )}
      {step === 2 && <CheckOtpForm code={code} setCode={setCode} setStep={setStep} mobile={mobile} />}
    </div>
  );
}

export default AuthPage;
