import style from "./ContactForm.module.css";
import Input from "../UI/Input/Input";
import SelectBox from "../UI/SelectBox/SelectBox";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button.js";
import { getProvinces, getSubjects, postFormData } from "../../lib/api";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Toast from "../UI/Toast/Toast";
import { TOAST_PROPERTIES } from "../../toastProperties";
const ContactForm = (props) => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("Select Position");
  let [checkValue, setCheckValue] = useState(true);
  const [autoDeleteTime, setAutoDeleteTime] = useState(3000);

  const selectPosition = (position) => {
    setPosition(position);
    setList([]);
  };

  const showToast = (type, message) => {
    const toastProperties = TOAST_PROPERTIES.find(
      (toast) => toast.title.toLowerCase() === type
    );
    toastProperties.description = message;
    setList([...list, toastProperties]);
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    address: "",
    postalCode: "",
    subject: "",
    message: "",
  });
  const [loadedDistricts, setLoadedDistricts] = useState(null);
  const [isValidInput, setIsValidInput] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
  });
  const {
    sendRequest: requestForProvinces,
    status: statusProvinces,
    data: loadedProvinces,
    error: errorProvinces,
  } = useHttp(getProvinces, true);

  const {
    sendRequest: sendSubjects,
    status: statusSubjects,
    data: loadedSubjects,
    error: errorSubjects,
  } = useHttp(getSubjects, false);

  const {
    sendRequest: sendFormData,
    status: statusFormData,
    data: loadedFormData,
    error: errorFormData,
  } = useHttp(postFormData, false);

  const onFirstNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput((prevState) => {
        return { ...prevState, firstName: true };
      });
    }
    setUserData((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };

  const onLastNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput((prevState) => {
        return { ...prevState, lastName: true };
      });
    }
    setUserData((prevState) => {
      return { ...prevState, lastName: event.target.value };
    });
  };

  const onEmailChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput((prevState) => {
        return { ...prevState, email: true };
      });
    }
    setUserData((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const onPhoneChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, phone: event.target.value };
    });
  };

  const onChangeCityHandler = (event) => {
    const city = event.target.value;
    setUserData((prevState) => {
      return { ...prevState, city: city };
    });
    setLoadedDistricts(
      loadedProvinces.find((provinces) => provinces.name === city).districts
    );
  };
  const onChangeDistrictHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, district: event.target.value };
    });
  };

  const onChangeAddressHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, address: event.target.value };
    });
  };

  const onChangePostalCodeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, postalCode: event.target.value };
    });
  };
  const onChangeSubjectHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput((prevState) => {
        return { ...prevState, subject: true };
      });
    }
    setUserData((prevState) => {
      return { ...prevState, subject: event.target.value };
    });
  };

  const onChangeMessageHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput((prevState) => {
        return { ...prevState, message: true };
      });
    }

    setUserData((prevState) => {
      return { ...prevState, message: event.target.value };
    });
  };

  useEffect(() => {
    requestForProvinces();
    sendSubjects();
  }, [requestForProvinces, sendSubjects]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    selectPosition("top-right");
    if (
      isValidInput.firstName &&
      isValidInput.lastName &&
      isValidInput.email &&
      isValidInput.subject &&
      isValidInput.message
    ) {
      sendFormData(userData);
      setUserData((prevState) => {
        return {
          ...prevState,
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          city: "",
          district: "",
          address: "",
          postalCode: "",
          subject: "",
          message: "",
        };
      });
      setLoadedDistricts(null);
      showToast("başarı", "Mesaj Gönderildi");
    } else {
      showToast("hata", "Bir şeyler yanlış gitti, zorunlu alanları giriniz ve tekrar deneyiniz");
    }
  };

  if (
    statusProvinces === "pending" ||
    statusFormData === "pending" ||
    statusSubjects === "pending"
  ) {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  return (
    <>
      <Toast
        toastList={list}
        position={position}
        autoDelete={checkValue}
        autoDeleteTime={autoDeleteTime}
      ></Toast>
      <section className={style["contact-section"]}>
        <form className={style["contact-form"]} onSubmit={submitFormHandler}>
          <Input
            id="first-name"
            label="Isim*"
            type="text"
            placeholder="Emre"
            value={userData.firstName}
            onChange={onFirstNameChangeHandler}
          ></Input>
          <Input
            id="last-name"
            label="Soyisim*"
            type="text"
            placeholder="Yıldız"
            value={userData.lastName}
            onChange={onLastNameChangeHandler}
          ></Input>
          <Input
            id="phone"
            label="Telefon Numarası"
            type="tel"
            placeholder="+905643422366"
            value={userData.phone}
            onChange={onPhoneChangeHandler}
          ></Input>
          <Input
            id="email"
            label="E-posta*"
            type="email"
            placeholder="örnek@mail.com"
            onChange={onEmailChangeHandler}
          ></Input>
          <SelectBox
            id="city"
            name="city"
            label="Şehir"
            placeholder="--Şehir seçiniz--"
            options={loadedProvinces !== null ? loadedProvinces : []}
            value={userData.city}
            onChange={onChangeCityHandler}
          ></SelectBox>
          <SelectBox
            id="district"
            name="district"
            label="Ilçe"
            placeholder="--İlçe seçiniz--"
            options={loadedDistricts !== null ? loadedDistricts : []}
            value={userData.district}
            onChange={onChangeDistrictHandler}
          ></SelectBox>
          <Input
            id="address"
            label="Adres"
            type="text"
            onChange={onChangeAddressHandler}
            value={userData.address}
          ></Input>
          <Input
            id="postal-code"
            label="Posta Kodu"
            type="text"
            onChange={onChangePostalCodeHandler}
            value={userData.postalCode}
          ></Input>
          <SelectBox
            id="subject"
            name="subject"
            label="Konu*"
            placeholder="--Konu seçiniz--"
            value={userData.subject}
            options={loadedSubjects !== null ? loadedSubjects : []}
            onChange={onChangeSubjectHandler}
          ></SelectBox>
          <TextArea
            id="message"
            name="message"
            rows="5 "
            cols="60"
            maxLength="2000"
            label="Mesaj*"
            value={userData.message}
            onChange={onChangeMessageHandler}
          ></TextArea>
          <Button type="submit" className="btn-send">
            Gönder
          </Button>
        </form>
      </section>
    </>
  );
};
export default ContactForm;
