import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ayushr.cs@outlook.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 74881 58901" Image={FiPhone} />
      <SingleInfo text="Bihar, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
