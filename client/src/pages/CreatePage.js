import React from "react";
/*import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";*/
import { TopSlide } from "../components/TopSlide/TopSlide/TopSlide";
import { SlideSpecialize } from "../components/SlideSpecialize/SlideSpecialize";
import { OneSlide } from "../components/OneSlide/OneSlide";
import { TwoSlide } from "../components/TwoSlide/TwoSlide";
import { ThirdSlide } from "../components/ThirdSlide/ThirdSlide";
import { FooterShorter } from "../components/FooterShorter/FooterShorter";
import { SubscriptionSlide } from "../components/Subscription/SubscriptionSlide";
import { Footer } from "../components/Footer/Footer";
import { ProductionFooter } from "../components/ProductionFooter/ProductionFooter";

export const CreatePage = () => {
  /*const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");*/

  /*useEffect(() => {
    window.M.updateTextFields();
  }, []);*/
  /*
  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
*/
  return (
    <>
      <TopSlide />
      <SlideSpecialize />
      <OneSlide />
      <TwoSlide />
      <ThirdSlide />
      <FooterShorter />
      <SubscriptionSlide />
      <Footer />
      <ProductionFooter />
    </>
    /*<div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Введите ссылку</label>
        </div>
      </div>
    </div>*/
  );
};
