import { useRef } from "react";

function InputValid() {
  const nameRef = useRef();
  const emailRef = useRef();

  function isValid() {
    if (!nameRef.current.value || !emailRef.current.value) {
      alert("Iltimos barcha maydonni to'ldiring");
      nameRef.current.style.borderColor = 'red';
      nameRef.current.style.borderWidth = '2px';
      emailRef.current.style.borderColor = 'red';
      emailRef.current.style.borderWidth = '2px'
      return false;
    }
    if (nameRef.current.value.length < 3 || emailRef.current.value.length < 6) {
      alert(
        "Ismingiz 3 ta xarfdan ko'p bo'lishi email esa 6 ta xarfdan ko'p bo'lish kerak"
      );
      nameRef.current.style.borderColor = 'red';
      nameRef.current.style.borderWidth = '2px';
      emailRef.current.style.borderColor = 'red';
      emailRef.current.style.borderWidth = '2px'
      return false;
    }
    return true;
  }

  function handleSend(e) {
    e.preventDefault();
    if (!isValid()) {
      return;
    }
    console.log(
      `Name: ${nameRef.current.value}`,
      `Email: ${emailRef.current.value}`
    );
    nameRef.current.style.borderColor = 'green';
    nameRef.current.style.borderWidth = '2px';
    emailRef.current.style.borderColor = 'green';
    emailRef.current.style.borderWidth = '2px'
    nameRef.current.value = "";
    emailRef.current.value = "";
  }

  return (
    <div>
      <form className="m-[50px] mx-auto w-[600px] flex flex-col gap-[20px] p-4 shadow-lg">
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter name"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter email"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          onClick={handleSend}
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default InputValid;
