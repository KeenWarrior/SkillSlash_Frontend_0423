import { NextResponse } from "next/server";

function Error({ statusCode }: { statusCode: number }) {
  return <h1> {statusCode} </h1>;
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
