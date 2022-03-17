import type { NextPage } from "next";
import { useRouter } from "next/router";

const User: NextPage = () => {
  const router = useRouter();

  console.log(router.query.user_id);

  return (
    <div style={{ color: "black", fontSize: "1.5rem" }}>
      I am the {router.query.user_id} page
    </div>
  );
};

export default User;
