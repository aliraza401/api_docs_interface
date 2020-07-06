import React, { useState } from "react";
import banner from "../img/one.png";
import icon from "../img/icon.jpg";
import dummy from "../img/dummy.png";

function Main() {
  const [slider_in, setslider_in] = useState(false);

  function toggleSlider() {
    const newValue = !slider_in;
    setslider_in(newValue);
    console.log(slider_in);
  }

  return (
    <div>
      <div className="">
        {/* sidebar */}

        <div className={slider_in ? "lyt-sidebar fixed " : "lyt-sidebar fixed active"}>
          <header class="header" role="banner">
            <h1 class="logo">
              <a href="#" id="my_nav_link">
                <span>GitHub</span> Guide
              </a>
            </h1>
            <div class="nav-wrap">
              <nav class="main-nav" role="navigation">
                <ul class="unstyled list-hover-slide">
                  <li>
                    <a href="#" id="my_nav_link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" id="my_nav_link">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#" id="my_nav_link">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" id="my_nav_link">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>

        {/* header  */}
        <div className="" id={slider_in ? null : "my_top_header"}>
          <p id="header" className="py-2">
            <i onClick={toggleSlider} className="ri-menu-line bold" id="toggle_btn"></i>
            <span style={{ float: "right" }}>GitHub.com</span>
          </p>
        </div>

        <div className="" id={slider_in ? null : "my_content"}>
          {/* main content  */}
          <div className="container">
            <img src={banner} className="mb-4 img" />

            <div className="grid ">
              <div className="column w-18@md">
                <p>The Hello World project is a time-honored tradition in computer programming. It is a simple exercise that gets you started when learning something new. Let’s get started with GitHub!</p>
                <p className="txt-md">You’ll learn how to:</p>
                <ul>
                  <li>Create and use a repository</li>
                  <li>Create and use a repository</li>
                  <li>Create and use a repository</li>
                  <li>Create and use a repository</li>
                  <li>Create and use a repository</li>
                </ul>

                <p className="txt-lg" id="what_github">
                  What is GitHub?
                </p>

                <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>
                <p>This tutorial teaches you GitHub essentials like repositories, branches, commits, and Pull Requests. You’ll create your own Hello World repository and learn GitHub’s Pull Request workflow, a popular way to create and review code.</p>

                <p className="txt-md">No coding necessary</p>

                <p>To complete this tutorial, you need a GitHub.com account and Internet access. You don’t need to know how to code, use the command line, or install Git (the version control software GitHub is built on).</p>

                <p id="quote_para">Tip: Open this guide in a separate browser window (or tab) so you can see it while you complete the steps in the tutorial.</p>

                <p className="txt-lg" id="step 1">
                  Step 1. Create a Repository
                </p>

                <p>
                  A <strong>repository</strong> is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets – anything your project needs. We recommend including a README, or a file with information about your project. GitHub makes it easy to add one at the same time you create your new repository. It also offers other common options such as a license file.
                </p>
                <p>Your hello-world repository can be a place where you store ideas, resources, or even share and discuss things with others.</p>
                <p className="txt-md">To create a new repository</p>

                <ol>
                  <li>In the upper right corner, next to your avatar or identicon, click and then select New repository.</li>
                  <li>In the upper right corner, next to your avatar or identicon, click and then select New repository.</li>
                  <li>In the upper right corner, next to your avatar or identicon, click and then select New repository.</li>
                  <li>In the upper right corner, next to your avatar or identicon, click and then select New repository.</li>
                  <li>In the upper right corner, next to your avatar or identicon, click and then select New repository.</li>
                </ol>
                <img src={dummy} className="img mb-4"></img>
                <p className="">
                  Click <strong>Create repository.</strong>
                </p>
                <p className="txt-lg" id="step 5">
                  Step 5. Merge your Pull Request
                </p>

                <p>In this final step, it’s time to bring your changes together – merging your readme-edits branch into the master branch.</p>
                <ul>
                  <li>Click the green Merge pull request button to merge the changes into master.</li>
                  <li>Click the green Merge pull request button to merge the changes into master.</li>
                  <li>Click the green Merge pull request button to merge the changes into master.</li>
                </ul>
                <img src={dummy} className="img mb-4"></img>

                <p className="txt-lg" id="celebrate">
                  Celebrate!
                </p>
                <p>By completing this tutorial, you’ve learned to create a project and make a pull request on GitHub!</p>
                <p>Here’s what you accomplished in this tutorial:</p>
                <ul>
                  <li>Created an open source repository</li>
                  <li>Created an open source repository</li>
                  <li>Created an open source repository</li>
                  <li>Created an open source repository</li>
                </ul>

                <p>Take a look at your GitHub profile and you’ll see your new contribution squares!</p>

                <p>To learn more about the power of Pull Requests, we recommend reading the GitHub flow Guide. You might also visit GitHub Explore and get involved in an Open Source project.</p>

                <p id="quote_para">
                  <strong>Tip:</strong> Check out our other Guides, YouTube Channel and On-Demand Training for more on how to get started with GitHub.
                </p>

                <div className="mt-4">
                  <small className="clr-secondary">Last updated April 7, 2016</small>
                </div>
              </div>
              <div className="column w-6@md pl-2">
                <div id="rgt_sidebar">
                  <p>
                    <a href="#" id="rgt_bar">
                      Intro
                    </a>
                  </p>
                  <p>
                    <a href="#what_github" id="rgt_bar">
                      What is Github!
                    </a>
                  </p>
                  <p>
                    <a href="#step 1" id="rgt_bar">
                      step 1
                    </a>
                  </p>
                  <p>
                    <a href="#step 5" id="rgt_bar">
                      step 5
                    </a>
                  </p>
                  <p>
                    <a href="#celebrate" id="rgt_bar">
                      Celebrate
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  footer  */}
          <div id="footer" className="txt-center clr-secondary">
            <img src={icon} id="footer_icon" />
            <p>GitHub is the best way to build and ship software.</p>
            <p>Powerful collaboration, code review, and code management for open source and private projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
