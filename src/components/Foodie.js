import React from "react";
import CustomModal from "../components/config/Modal";
import UpdateFoodie from "./UpdateFoodie";
import DeleteFoodie from "./DeleteFoodie";
import LookieFoodie from "./lookieFoodie";

const Foodie = ({ foodieData, reload }) => {
  return (
    <div className="foodiesContainer">
<CustomModal btnClass="foodieVeiw" btnText={foodieData.Title} title={foodieData.MealType}>
  <LookieFoodie reload={reload} data={foodieData}/>
</CustomModal>


      <div className="btnStuff">

        <CustomModal btnClass="updateBtn" btnText="Update" title="Update Foodie">

          <UpdateFoodie reload={reload} data={foodieData} />

        </CustomModal>
        <div>
          <CustomModal btnClass="deleteBtn" btnText="-" title="Delete a Food">

            <DeleteFoodie reload={reload} delete={foodieData._id} />

          </CustomModal>
        </div>
      </div>
    </div>
  );
};

export default Foodie;
//updated 9/5
