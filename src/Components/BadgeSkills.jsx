import React from "react";

function BadgeSkills({ tecnology, icon }) {
  return (
    <div>
      <span className=" hover:scale-110 transition hover:shadow-lg hover:shadow-gray-600 ease-in-out px-4 py-2 cursor-pointer rounded-3xl bg-gradient-to-r from-gray-900 via-slate-800  to-slate-600 text-white inline-block content-center font-medium text-sm">
        {icon ? <img
          className="size-5 inline mr-2"
          src={icon}
          alt={tecnology.technology}
        /> : " 📚 "}
        {tecnology.technology}
      </span>
    </div>
  );
}

export default BadgeSkills;
