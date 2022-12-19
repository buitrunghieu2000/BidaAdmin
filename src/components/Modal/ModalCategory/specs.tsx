
import React, { useState } from "react";

type Props = {
  register: any;
  id: number;
};

const Specs = ({ register, id }: Props) => {
  return (
    <div className="formInput">
      <div className="specs-input flex gap-[10px]">
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register(`name_${id}`)}
          type="text"
          required
          placeholder="Name Spec"
        />
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register(`values_${id}`)}
          type="text"
          placeholder="Value"
          required
        />
      </div>
    </div>
  );
};

export default Specs;
