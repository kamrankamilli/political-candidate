import IssueDetails from "../components/Issues/IssueDetails";
import { getIssue } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { useParams } from "react-router-dom";
const IssueDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const { sendRequest, status, data, error } = useHttp(getIssue, true);
  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return <IssueDetails data={data}></IssueDetails>;
};
export default IssueDetailsPage;
