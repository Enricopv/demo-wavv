import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router.asPath);

  if (router.asPath.includes("/dashboard")) {
    return (
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    );
  }

  return <Component {...pageProps} />;
}

const Dashboard = (props: { children?: React.ReactNode }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row",
            backgroundColor: "#001828", }}>
        <div
          style={{
            width: 250,
            minHeight: "100vh",
            backgroundColor: "#001828",
            color: "white",
            borderLeftColor: "#001828",
            borderBottomColor: "#001828",
            borderTopColor: "#001828",
            borderRightColor: "#0D2433",
            borderRightWidth: 2,
            borderStyle: "solid",
          }}
        >
          <div
            style={{
              width: 250,
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Wavv
          </div>
          <div>MenuItem 1</div>
          <div>MenuItem 2</div>
          <div>MenuItem 3</div>
        </div>
        <div style={{ width: "100%", backgroundColor: "#001828", padding: "2rem" }}>
          <div
            style={{
              color: "white",
              width: "100%",
              fontSize: "2rem",
            }}
          >
            Dashboard
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MyApp;
