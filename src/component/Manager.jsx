import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef(); // Ensure passwordRef is assigned correctly
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("password");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []); // Removed 'form' as a dependency to run only once on mount

  const copyText = (text) => {
    toast('copy to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text);
  }

  const showPassword = () => {
    if (ref.current.src.includes("hide.png")) {
      ref.current.src = "eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "hide.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    const updatedPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("password", JSON.stringify(updatedPasswordArray));
    setForm({ site: "", username: "", password: "" })

    toast('password saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  };

  const deletePassword = (id) => {
    console.log("Deleting password with id", id)
    setPasswordArray(passwordArray.filter(item => item.id !== id));
    localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)));

    toast('password deleted.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  }


  const editPassword = (id) => {
    console.log("Editing password with id", id)
    setForm(passwordArray.filter(i => i.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id));


  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />



      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="container md:p-0 md:mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your Own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8">
          <input value={form.site} onChange={handleChange} className="rounded-full border border-green-500 w-full p-4 py-1" placeholder="Enter website URL" type="text" name="site" id='site' />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} className="rounded-full border border-green-500 w-full p-4 py-1" placeholder="Enter username" type="text" name="username" id='username' />
            <div className="relative">
              <input value={form.password} onChange={handleChange} ref={passwordRef} className="rounded-full border border-green-500 w-full p-4 py-1" placeholder="Enter password" type="password" name="password" id='password' />
              <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                <img className="p-1" ref={ref} src="eye.png" alt="show" width={26} />
              </span>
            </div>
          </div>
          <span>
            <button className="bg-gradient-to-r from-green-300 to-green-500 border border-black-100 rounded-lg flex justify-center items-center px-4 py-2 shadow-md" onClick={savePassword}>
              <img className="mr-2" width="40" src="add.png" alt="addicon" />
              Add Password
            </button>
          </span>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Password</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden mb-0">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2 w-5">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2  text-center w-32 ">
                      <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                      <img className="cursor-pointer" onClick={() => { copyText(item.site); }} src="copy.svg" alt="copy" />
                    </td>
                    <td className="py-2  text-center w-32">
                      {item.username}
                      <img className="cursor-pointer" onClick={() => { copyText(item.username); }} src="copy.svg" alt="copy" />
                    </td>
                    <td className="py-2  text-center w-32 ">
                      {item.password}
                      <img className="cursor-pointer" onClick={() => { copyText(item.password); }} src="copy.svg" alt="copy" />
                    </td>
                    <td className="py-2   text-center w-32 flex justify-center items-center gap-3 ">
                     Edit <img className="cursor-pointer " onClick={() => { editPassword(item.id) }} src="edit.svg" alt="edit" />
                       Delete<img className="cursor-pointer  " onClick={() => { deletePassword(item.id) }} src="delete.svg" alt="delete" />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
