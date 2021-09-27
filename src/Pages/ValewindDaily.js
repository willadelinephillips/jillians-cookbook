import React, { Component } from "react";
 
class ValewindDaily extends Component {
  componentDidMount() {
    document.title = "24-year-old woman found dead in kitchen, pieces of body missing";
  }
  render() {
    return (
      <div className="newsArticle">
        <h4><button>NEWS</button> {">"} <button>CRIME AND SAFETY</button> • News</h4>
        <h2>24-year-old woman found dead in kitchen, pieces of body missing</h2>
        <h3>By <button>STEVEN KANE</button> | Western California News Association</h3>
        <h3>PUBLISHED: November 10, 2021 at 11:46 a.m. | UPDATED: November 10, 2021 at 1:26 p.m.</h3>
        <hr></hr>
        <br></br>
        <p>
          A 24-year-old woman was found dead; torn to pieces in her kitchen at home Tuesday, 
          November 9. She was living alone when neighbors complained of a horrible smell eminating 
          from her house and officers were called to investigate.
        </p>
        <p>
          Her father, Keith Evans, was able to confirm that the dead girl was Jillian Evans, a 
          local food blogger. Mr. Evans had lost his wife to cancer a little over a year ago, and 
          the loss of his daughter so soon is a harsh blow. He cannot be reached for comment.
        </p>
        <p>
          When officers entered the house, a horrorshow enfolded in front of them. The rest of the 
          rooms were untouched and organized, but the kitchen was bathed in swaths of blood from 
          the body of Miss Evans. Pieces of her were found by officers strewn across the floor, and 
          when detectives attempted to move her for autopsy, it was noted that more than 40% of her 
          body was completely missing. These missing pieces included both legs, both eyes, several fingers on the 
          right hand, and her entire left arm. 
        </p>
        <p>
          Although much of the information concerning the autopsy is still unknown to the public, 
          it appears that someone attempted to stem the bleeding as it took place with kitchen 
          supplies, but continued to remove pieces of her as they did. Her stomach was also 
          bloated and full, although it's as of yet unknown what she had eaten prior to being 
          murdered.
        </p>
        <p></p>
      </div>
    );
  }
}
 
export default ValewindDaily;