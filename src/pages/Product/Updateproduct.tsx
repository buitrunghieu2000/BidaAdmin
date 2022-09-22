import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import Updateprod from "../../components/Form/Updateprod";

type Props = {};

const Updateproduct = (props: Props) => {
  const { productId } = useParams();
  return (
    <div className="flex gap-8">
      <Carousel width={700} autoPlay={true} emulateTouch={true} className='text-center' thumbWidth={150}>
        <div>
          <img src="https://cdn.tgdd.vn/Products/Images/1942/274763/android-sony-4k-43-inch-kd-43x80k-240522-030219-550x340.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://cdn.tgdd.vn/Products/Images/1942/274763/android-sony-4k-43-inch-kd-43x80k-240522-030219-550x340.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://cdn.tgdd.vn/Products/Images/1942/274763/android-sony-4k-43-inch-kd-43x80k-240522-030219-550x340.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <div className="flex-1"> 
        <Updateprod/>
      </div>
    </div>
  );
};

export default Updateproduct;
