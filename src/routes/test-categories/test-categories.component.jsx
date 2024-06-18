import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component.jsx';

const TestCategories = () => {

  const Branches = [
    {
      "id": 1,
      "title": "Wensday",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Whensday",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];

  // const BranchContent = [
  //   {
  //     "id": 1,
  //     "title": "Media",
  //     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  //   },
  //   {
  //     "id": 2,
  //     "title": "Merch",
  //     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  //   },
  //   {
  //     "id": 3,
  //     "title": "mens",
  //     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  //   }
  // ];

  return (
    <div>
        <Outlet />
        <Directory categories={Branches} />
    </div>
);

}

export default TestCategories;