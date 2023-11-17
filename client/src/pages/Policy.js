import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p>1. <strong>Data Collection:</strong> Limited, essential user information for order processing, ensuring privacy.</p>
<p>2. <strong>Secure Transactions:</strong> Industry-standard encryption for safe financial transactions.</p>
<p>3. <strong>No Third-Party Sharing:</strong> Personal information kept confidential; no sharing without consent.</p>


        </div>
      </div>
    </Layout>
  );
};

export default Policy;
