import { useState, useEffect, useContext } from "react";
import Quiz from "./assets/quiz.png";
import Modal from "./Modal";
import { QuizContextProvider } from "./contexts/QuizContext";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(() => {
        alert("Something went wrong!");
      })
      .finally(() => {
        console.log("I will run anyway");
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res) => {
      console.log(res);
    });
  }, []);

  const getParticularProductDetail = (id) => {
    axios
      .get(
        `https://fakestoreapi.com/products/${id}?name=${name}&email=${email}`
      )
      .then((res) => {
        console.log(res);
      });
  };

  const createUser = () => {
    axios
      .post(`http://localhost:8000/create_user`, {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <QuizContextProvider>
      <div className="h-screen flex flex-col items-center justify-center ">
        <div>
          <img src={Quiz} className="h-[300px]" />
          <p className="text-gray-700 text-xl font-bold text-center mb-2">
            Interactive Quiz
          </p>
          <Modal />
          {/* {products.map((product) => (
            <div
              key={product.id}
              onClick={() => getParticularProductDetail(product.id)}
            >
              <p>{product.title}</p>
            </div>
          ))} */}
        </div>
      </div>
    </QuizContextProvider>
  );
}

export default App;
