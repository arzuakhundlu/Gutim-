import React from "react";
import awardimg from '../image/award.jpg.webp'

function AboutBestGym() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-[30px] pb-[100px] max-[990px]:grid-cols-1">
        <div className="col-span-2">
          <h2 className="text-[40px] font-[600] text-[#111111] uppercase mb-[20px]">BEST GYM AWARD</h2>
          <p className="text-[16px] text-[#6b6b6b] text-[400] mb-[15px] leading-[26px]">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
            sed odio sit amet nibh vulputate cursus a amet.
          </p>
          <p className="text-[16px] text-[#6b6b6b] font-[400] mb-[15px] leading-[26px]">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
            gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, gravida quam semper libero sit
            amet.
          </p>
        </div>
        <div>
            <img  src={awardimg}/>
        </div>
      </div>
    </div>
  );
}

export default AboutBestGym;
