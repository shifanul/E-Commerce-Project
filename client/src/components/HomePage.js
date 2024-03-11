//HOME PAGE ---- INFORMATION ON PRODUCTS AND FEATURES!
//
import { useEffect, useState } from "react";
import RowHP from "./HomePageHelpers/RowHP";
import { Watch } from "react-loader-spinner";

const HomePage = () => {
  const [allItems, setAllItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // load all the watches from the db
  useEffect(() => {
    fetch(`api/get-watches`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data.data);
        return data.data;
      })
      .then((data) => {
        let cgs = data.map((item) => item.category);
        cgs = [...new Set(cgs)];
        setCategories(cgs);
      });
    // loads for a minimum of 2,5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div style={style}>
        <Watch
          height="200"
          width="200"
          radius="48"
          color="#2f4858"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <>Loading your favorite wearables...</>
      </div>
    );
  }

  return (
    <>
      {categories.map((cate) => (
        <RowHP
          key={cate}
          category={cate}
          items={allItems.filter((item) => item.category === cate)}
        />
      ))}
    </>
  );
};

export default HomePage;

const style = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
