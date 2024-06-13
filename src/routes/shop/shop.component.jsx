import HalfHorizontalContainer from "../../components/half-horizontal-container/half-horizontal-container.component";

import './shop.styles.scss'

const Shop = () => {
  const containers = [
    {
      id: 1,
      classNameClassifiers: {large:"wensday-container", small1:"wensday-container-small", small2:"wensday-container-small", small3:"wensday-container-small"},
      text: { titleBranch: "Wensday",  titleSub1: "Media", titleSub2: "Merch", titleSub3: "Merch2" },
    },
    {
      id: 2,
      classNameClassifiers: {large:"whensday-container", small1:"whensday-container-small", small2:"whensday-container-small", small3:"whensday-container-small"},
      text: { titleBranch: "Whensday",  titleSub1: "Kalendar", titleSub2: "Images", titleSub3: "Media" },
    },
  ]

  return (
    <div className="horizontal-containers">
      {containers.map((container) => {
        const { id, classNameClassifiers, text } = container;
        return (
          <HalfHorizontalContainer
            key={id}
            classNameClassifiers={classNameClassifiers}
            text={text}
          />
        );
      })}
    </div>
  );
};
  
export default Shop;