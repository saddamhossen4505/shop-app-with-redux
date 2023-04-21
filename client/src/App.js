import { RouterProvider } from "react-router-dom";
import "./App.css";
import publicRoute from "./routes/publicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBrands, getAllCategory, getAllTags } from "./redux/shop/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllTags());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
