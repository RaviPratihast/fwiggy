import { useRef, useState } from "react";
import ValidateForm from "../Utils/ValidateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/authSlice.jsx";
import getFriendlyErrorMessage from "../Utils/HelperFunction.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const provider = new GoogleAuthProvider();

  const toggleAuthMode = () => {
    setIsSignIn((prev) => !prev);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameValue = name.current?.value || "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const validationError = ValidateForm(emailValue, passwordValue);

    if (validationError) {
      toast.error(validationError);
      setError(validationError);
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameValue,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              toast.success("Successfully signed up!");
              navigate("/restaurants");
            })
            .catch((error) => {
              const friendlyMessage = getFriendlyErrorMessage(error.code);
              toast.error(friendlyMessage);
              setError(friendlyMessage);
            });
        })
        .catch((error) => {
          const friendlyMessage = getFriendlyErrorMessage(error.code);
          toast.error(friendlyMessage);
          setError(friendlyMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Successfully signed in!");
          navigate("/restaurants");
        })
        .catch((error) => {
          const friendlyMessage = getFriendlyErrorMessage(error.code);
          toast.error(friendlyMessage);
          setError(friendlyMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({ uid, email, displayName, photoURL }));
        toast.success("Successfully signed in with Google!");
        navigate("/restaurants");
      })
      .catch((error) => {
        const friendlyMessage = getFriendlyErrorMessage(error.code);
        toast.error(friendlyMessage);
        setError(friendlyMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                ref={name}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoComplete="name"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              autoComplete={isSignIn ? "current-password" : "new-password"}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}. Password must be at least 8 characters long, contain an
              uppercase letter, a lowercase letter, a number, and a special
              character.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign in with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-700">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-orange-500 font-bold hover:underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export { AuthForm };
