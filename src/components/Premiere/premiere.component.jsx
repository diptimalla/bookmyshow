import React from "react";
import Slider from "react-slick";
import Poster from"../Poster/Poster.component";
//config
import PosterCarousalSettings from"../../config/PosterCarousal.config";
import PremiereImages from"../../config/TempPoster.config";

export const Premiere =() => {
    

    return(<> 
<div className="flex flex-col items-start"> 
  <h3 className="text-white text-xl font-bold">Premieres</h3>
  <p className="text-white text-sm">Brand new release every friday</p>
</div>
     <Slider {...PosterCarousalSettings}>
         {PremiereImages.map((image)=> <Poster {...image} isDark/>)}
     </Slider>
     </>
    );
};


export default Premiere;