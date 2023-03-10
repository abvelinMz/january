import React from "react";
import { HiPhone, HiOutlineMail } from "react-icons/hi";

interface I_mail_link_with_icon {
  email: string;
}
function Mail_link_with_icon({ email }: I_mail_link_with_icon) {
  return (
    <div>
      <div className="flex items-center text-base text-ye">
        <HiOutlineMail />
        <a
          href={`mailto:${email}`}
          className="pl-4 text-bl hover:text-blue-600"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

export default Mail_link_with_icon;
