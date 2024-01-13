// import { ReactNode } from "react";

interface Props {
  main_heading: string;
  // children: ReactNode
}

const ReadWatchLearnPage = (props: Props) => {
  return (
    <>
      <h1>{props.main_heading}</h1>
    </>
  );
};

export default ReadWatchLearnPage;
