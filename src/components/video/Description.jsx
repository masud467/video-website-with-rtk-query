import { Link, useNavigate } from "react-router";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import { useDeleteVideoMutation } from "../../features/api/videoApi";
import Error from "../ui/Error";
import { useEffect } from "react";
const Description = ({ video }) => {
  const { id, description, title, date } = video;
  const [deleteVideo, { isLoading, isError, isSuccess }] =
    useDeleteVideoMutation();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (id) {
      deleteVideo(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        {/* <!-- delete/edit --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <Link to={`/videos/edit/${id}`}>
                <img className="w-5 block" src={EditIcon} alt="Edit" />
              </Link>
            </div>
            <Link
              to={`/videos/edit/${id}`}
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              Edit
            </Link>
          </div>
          <div className="flex gap-1" onClick={handleDelete}>
            <div className="shrink-0">
              <img className="w-5 block" src={DeleteIcon} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
      {!isLoading && isError && <Error message="There was an error" />}
    </div>
  );
};

export default Description;
