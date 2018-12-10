import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SUCCESS_QUERY = gql`
  query Success {
    launches {
      launch_success
      launch_date_local
    }
  }
`;

const getData = data => {
  let success = 0;
  let fail = 0;
  let no_launch = 0;
  const pie_data = [];
  //console.log(data);
  data.map(result => {
    if (result.launch_success) {
      success++;
      pie_data[0] = success;
    } else if (result.launch_success === false) {
      fail++;
      pie_data[1] = fail;
    } else {
      no_launch++;
      pie_data[2] = no_launch;
    }
  });
  console.log(pie_data);
};

const Pie = () => {
  return (
    <Query query={SUCCESS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h5>Loading...</h5>;
        if (error) {
          console.log(error);
        }
        //console.log(data.launches);
        getData(data.launches);
        return (
          <div>
            <h5>Place holder</h5>
          </div>
        );
      }}
    </Query>
  );
};

export default Pie;
