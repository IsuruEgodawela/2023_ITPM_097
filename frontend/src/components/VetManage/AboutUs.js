import React from "react";
import NavBar from '../navbar/NavBar';

function AboutUs() {
  return (
    <>
    <div > 
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
        
      />
      <div className="row">
      <NavBar />
            <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-10 col-md-8 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7bSCLiqpjJbtsMjHQYx2ztEP-tfYVAZ0WQ&usqp=CAU"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-md-8 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-uEQ_N4kcsR7bfNqMKK-PYrC88jEj-Y3Tg&usqp=CAU"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-md-8 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38Ns-CVTDefJzIOyf7qTAbQ0M09CRhV1oQA&usqp=CAU"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-10">
              <h5 className="text-custom font-weight-normal mb-5">About Us</h5>
              <h4 className="title mb-4">
                Our mission <br />
                
              </h4>
              <p className="text-muted mb-0">
              It’s incredible just how much support an animal can bring to your life. As MyPetNeedsThat mentions, if you are particularly vulnerable or have special needs then there are certain dog breeds that are perfect at providing emotional and physical support. A dog or cat can help with loneliness, give you companionship and someone to talk to, and sit with you during the evenings. Pets can be lifesavers when it comes to depression and grief. They can give you a sense of purpose and a reason to get out of bed when you are feeling particularly depressed or anxious. Animals such as cats and dogs can have a deeply calming effect on humans and can often pick up on their owner’s moods: snuggling up to you when you are feeling sad or licking your hands if they sense that you have anxiety.

Owning a pet can open up your world. If you have a dog, then you will have to walk it daily, which means that you will have interactions with other dog owners and walkers too. This can help with loneliness in people who find it difficult to make friends.

Playing with a cat or a dog can take your mind away from your problems and place you in the “here and now.” This is basic mindfulness and wonderful for mental health.  
              </p>
              </div>
              </div>
              
              
      </div>
            
      {/* <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">

              

              

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://www.maga.lk/wp-content/uploads/2015/05/148-Ruhunupura-wsp-12.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
              <h4 className="title mb-4">
                Our mission is to <br />
                Give everyone access to clean water.
              </h4>
              <p className="text-muted mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt?
              </p>

              {/* <div className="row">
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">10,000+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Projects Completed
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1500+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Donators
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1000+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Workers
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="h4 mb-0 text-custom">1800+</i>
                    <h6 className="ml-3 mb-0">
                      <a href="javascript:void(0)" className="text-dark">
                        Locations
                      </a>
                    </h6>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </>
  );
}

export default AboutUs;
