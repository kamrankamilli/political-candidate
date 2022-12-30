import IssueList from "../components/Issues/IssueList";
import useHttp from "../hooks/use-http";
import { getIssues } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
const IssuesPage = () => {
  const { sendRequest, status, data, error } = useHttp(getIssues, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <>
      <IssueList issues={data}></IssueList>
    </>
  );
};
export default IssuesPage;
