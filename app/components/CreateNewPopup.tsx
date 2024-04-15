import Image from "next/image";
import React from "react";

const data = [
  {
    headerTitle: "People",
    items: [
      {
        icon: "/peopleIcon.webp",
        name: "Prospect",
        link: "/prospect",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Tenant",
        link: "/tenant",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Owner",
        link: "/owner",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Vendor",
        link: "/vendor",
      },
      {
        icon: "/peopleIcon.webp",
        name: "User",
        link: "/vendor",
      },
    ],
  },
  {
    headerTitle: "Properties",
    items: [
      {
        icon: "/payment_icon.webp",
        name: "All Properties",
        link: "/property",
      },
      {
        icon: "/ion_home_outline.webp",
        name: "Residential Property",
        link: "/unit",
      },
      {
        icon: "/building_icon.webp",
        name: "Commercial Property",
        link: "/building",
      },
    ],
  },
  {
    headerTitle: "Rentals",
    items: [
      {
        icon: "/mail_icon.webp",
        name: "Rentals",
        link: "/rentals",
      },
      {
        icon: "/mail_icon.webp",
        name: "Rent Applications",
        link: "/vacancies",
      },
    ],
  },
  {
    headerTitle: "Tasks & Maintenance",
    items: [
      {
        icon: "/tasksIcon.webp",
        name: "Tasks",
        link: "/tasks",
      },
      {
        icon: "/tasksIcon.webp",
        name: "Work Orders",
        link: "/maintenance",
      },
      {
        icon: "/tasksIcon.webp",
        name: "Tenants Requests",
        link: "/maintenance",
      },
      {
        icon: "/tasksIcon.webp",
        name: "Owners Requests",
        link: "/maintenance",
      },
    ],
  },
  {
    headerTitle: "Tenant Transactions",
    items: [
      {
        icon: "/peopleIcon.webp",
        name: "Post Charge",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Receive Payment",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Issue Credit",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Give Refund",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Withhold Deposits",
        link: "/postcharge",
      },
    ],
  },
  {
    headerTitle: "Vendor Transactions",
    items: [
      {
        icon: "/task_icon.webp",
        name: "Create Bill",
        link: "/postcharge",
      },
      {
        icon: "/task_icon.webp",
        name: "pay Bill",
        link: "/postcharge",
      },
      {
        icon: "/task_icon.webp",
        name: "Add Credit",
        link: "/postcharge",
      },
      {
        icon: "/task_icon.webp",
        name: "Management Fees",
        link: "/postcharge",
      },
    ],
  },
  {
    headerTitle: "Owner Transactions",
    items: [
      {
        icon: "/payment_icon.webp",
        name: "Owner Contributions",
        link: "/postcharge",
      },
      {
        icon: "/ion_home_outline.webp",
        name: "Owner Distributions",
        link: "/postcharge",
      },
    ],
  },
  {
    headerTitle: "Other Transactions",
    items: [
      {
        icon: "/mail_icon.webp",
        name: "Journal Entry",
        link: "/postcharge",
      },
      {
        icon: "/mail_icon.webp",
        name: "Bank Transfer",
        link: "/postcharge",
      },
      {
        icon: "/mail_icon.webp",
        name: "Bank Deposit",
        link: "/postcharge",
      },
      {
        icon: "/mail_icon.webp",
        name: "Expense",
        link: "/postcharge",
      },
      {
        icon: "/mail_icon.webp",
        name: "Check",
        link: "/postcharge",
      },
    ],
  },
  {
    headerTitle: "Communications",
    items: [
      {
        icon: "/peopleIcon.webp",
        name: "Post Charge",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Receive Payment",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Issue Credit",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Give Refund",
        link: "/postcharge",
      },
      {
        icon: "/peopleIcon.webp",
        name: "Withhold Deposits",
        link: "/postcharge",
      },
    ],
  },
];
interface Props {
  onClose?: () => void;
}
export default function CreateNewPopup(props: Props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      className="fixed w-full top-0 left-0 h-full flex items-center justify-center z-20"
    >
      <div className="w-[calc(80vw)] max-h-[90vh] overflow-auto bg-white p-10 ">
        <div className="flex w-full justify-between">
          <div>
            <p className="text-black font-bold">Create New</p>
            <div className="bg-[#1ED760] w-[50px] h-1" />
          </div>
          <Image
            className="cursor-pointer"
            src="/cross_icon.webp"
            alt="Icon"
            width={50}
            height={50}
            onClick={props.onClose}
          />
        </div>
        <div className="text-black flex flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="w-[25%] mt-10">
              <p className="font-bold">{item.headerTitle}</p>
              {item.items.map((_item, _index) => (
                <div className="mt-5">
                  <div key={_index} className="flex gap-5">
                    <Image src={_item.icon} alt="Icon" width={25} height={25} />
                    <p className="text-[15px]">{_item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
