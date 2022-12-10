import _ from "lodash";
type Props = {
  errors: any;
  name: string;
};

const ErrorMessage = ({ errors, name }: Props) => {
  const error = _.get(errors, name);
  return error ? (
    <span className="italic text-red-500">{error.message}</span>
  ) : null;
};

export default ErrorMessage;
