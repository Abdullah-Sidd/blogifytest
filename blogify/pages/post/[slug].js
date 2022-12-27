import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import { client } from "../../lib/client";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Post = ({ posts }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(posts);
  const filtered = posts.filter(function (value) {
    return value.slug.current != slug;
  });

  return (
    <>
      {/* <div className='flex'>
 <main className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-4">
 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

<div className='my-auto mr-11'>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="relative">
    <img
      className="w-full clippy"
      src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Sunset in the mountains"
    />
    <div className="clippy absolute bottom-0 left-0 top-0 right-0 bg-blue-700 bg-opacity-50 p-4 text-white flex flex-col justify-end items-center"></div>
    <div className="absolute bottom-0 right-0 mb-6 mr-6 rounded-full h-16 w-16 flex items-center bg-green-400 justify-center text-4xl font-thin absolute right-0 text-white shadow-2xl">
      +
    </div>
  </div>
  <div className="pt-3 pb-5 px-5 flex flex-col items-center">
    <p className="font-bold text-3xl">John Doe</p>
    <p className="text-gray-500 mb-2">Product Designer</p>
    <p className="text-center mb-2">
      Apparently we had reached a great height in the atmosphere
    </p>
    <div className="flex flex-row align-center justify-center">
      <svg
        className="ml-2"
        height="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M431.908,70.315l-9.978-9.455l-0.206,0.347C375.361,21.659,317.04,0,256.002,0c-33.211,0-65.606,6.383-96.411,18.975
			l-0.092-0.096l-6.709,3.07C77.399,55.32,22.291,123.207,5.862,203.544v1.364H5.433c-0.015,0-0.027-0.53-0.043-0.455l-1.727,7.945
			l0.158-0.096c-2.519,14.554-3.81,29.189-3.81,43.792c0,75.444,32.77,145.914,90.198,194.771l-0.063,0.12l6.594,5.241
			C142.571,492.721,197.645,512,256.002,512c30.811,0,61.217-5.693,90.711-16.902l6.896-2.688v-0.163
			c84.883-34.19,143.853-110.479,155.637-202.726l0.601,0.179l1.143-14.172c0.556-7.123,1-13.092,1-19.52
			C511.99,185.211,483.564,119.26,431.908,70.315z M256.002,21.905c57.011,0,111.432,20.689,154.261,58.376
			c-30.582,48.616-73.471,87.25-124.933,112.497C256.82,135.542,220.161,82.937,176.13,36.061
			C201.807,26.673,228.6,21.905,256.002,21.905z M154.572,45.148c44.864,46.57,82.081,99.184,110.783,156.6
			c-36.75,14.942-75.54,22.504-115.479,22.504c-42.008,0-82.685-8.343-121.034-24.804C45.553,132.192,91.81,75.396,154.572,45.148z
			 M21.915,256.008c0-11.522,0.881-23.127,2.598-34.65c39.828,16.448,81.927,24.799,125.363,24.799
			c43.211,0,85.164-8.284,124.886-24.611c6.052,13.268,11.749,27.039,17.029,41.185c-84.042,27.756-152.979,87.846-192.084,167.314
			C50.103,385.566,21.915,322.901,21.915,256.008z M256.002,490.089c-50.517,0-98.344-15.82-138.864-45.822
			c36.162-76.604,101.739-134.555,182.008-160.921c20.995,62.529,32.028,127.656,32.84,193.854
			C307.203,485.758,281.679,490.089,256.002,490.089z M353.715,468.575c-1.625-65.294-12.878-129.52-33.529-191.314
			c55.356-13.923,113.844-12.102,168.06,5.067C479.104,365.698,428.602,435.329,353.715,468.575z M490.046,259.912
			c-30.724-9.231-62.523-13.905-94.718-13.905c-27.767,0-55.421,3.527-82.367,10.479l-0.055-0.158l-0.064,0.019
			c-5.557-14.971-11.573-29.582-17.973-43.626l0.093-0.043l-0.078-0.16c53.821-26.39,98.916-66.417,131.52-116.725
			c41.18,43.618,63.7,99.997,63.7,160.215C490.105,257.313,490.083,258.618,490.046,259.912z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <svg
        className="ml-2"
        height="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981C26.628,123.333,0,187.621,0,256
			s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.981S512,324.379,512,256
			S485.372,123.333,437.019,74.981z M256,495.832C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168
			S495.832,123.756,495.832,256S388.244,495.832,256,495.832z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M436.352,162.391c-2.433-2.104-5.958-2.463-8.875-1.11c-4.183,1.94-8.457,3.644-12.806,5.107
			c4.313-5.884,7.758-12.422,10.188-19.432c1.002-2.891,0.503-6.176-1.569-8.427c-2.593-2.814-6.723-3.406-9.963-1.56
			c-11.815,6.733-24.558,11.306-37.931,13.618c-14.958-13.729-34.201-21.24-54.643-21.24c-42.313,0-77.147,32.642-80.648,74.065
			c-8.741-1.364-25.844-6.241-29.933-7.578c-29.581-10.075-56.228-27.814-77.075-51.307c-1.236-1.393-2.864-2.429-4.695-2.764
			c-3.68-0.672-7.171,1.186-8.745,4.339c-5.181,10.383-7.809,21.548-7.809,33.185c0,16.093,5.038,31.261,14.113,43.73
			c-2.828-0.531-5.838,0.462-7.812,2.89c-1.135,1.396-1.703,3.168-1.77,4.966c-0.03,0.82-0.057,1.643-0.057,2.472
			c0,21.817,9.99,41.646,26.136,54.588c-1.115,0.755-2.055,1.797-2.703,3.082c-0.963,1.904-1.07,4.143-0.434,6.178
			c7.052,22.559,24.572,39.739,46.292,46.781c-19.673,11.976-42.429,18.434-65.679,18.434c-2.053,0-4.166-0.053-6.279-0.156
			c-4.046-0.185-7.675,2.639-8.371,6.744c-0.568,3.349,1.162,6.698,4.087,8.423c29.718,17.529,63.734,26.792,98.39,26.792
			c41.361,0,80.758-12.881,113.607-36.725c4.052-2.942,4.499-8.821,0.959-12.362l-0.003-0.003
			c-2.852-2.852-7.338-3.159-10.605-0.793c-29.275,21.198-65.207,33.714-103.959,33.714c-21.719,0-43.162-3.968-63.255-11.61
			c24.303-4.268,47.275-14.808,66.409-30.712c2.312-1.922,3.529-4.962,2.947-7.911c-0.744-3.767-3.972-6.43-7.707-6.535
			c-19.686-0.558-37.26-11.435-46.698-28.06c4.501-0.216,9.006-0.832,13.44-1.841c3.382-0.77,6.119-3.472,6.559-6.913
			c0.529-4.142-2.134-7.925-6.085-8.897c-21.117-5.2-36.647-22.364-40.14-43.256c6.19,1.451,12.624,2.092,19.047,1.896
			c3.963-0.119,7.317-3.109,7.792-7.166c0.374-3.196-1.323-6.291-4.07-7.966c-17.529-10.682-27.985-29.272-27.985-49.783
			c0-5.014,0.623-9.917,1.859-14.665c21.193,20.954,46.914,36.922,75.086,46.518c0.258,0.088,28.093,8.754,38.636,8.797
			c0.688,0.017,3.975,0.162,3.98,0.162c3.388,0.137,6.673-1.919,7.953-5.326c0.368-0.978,0.502-2.03,0.477-3.074
			c-0.011-0.471-0.023-0.942-0.023-1.416c0-35.713,29.055-64.768,64.769-64.768c17.487,0,33.878,6.872,46.158,19.348
			c1.777,1.807,4.282,2.697,6.793,2.349c8.227-1.141,16.256-3.025,24.037-5.632c-4.142,4.544-9.025,8.437-14.502,11.504
			c-3.692,2.067-5.258,6.558-3.518,10.415l0.119,0.264c1.424,3.152,4.691,5.045,8.136,4.72c6.687-0.638,13.282-1.739,19.753-3.291
			c-5.725,5.904-12.02,11.267-18.849,16.051c-2.228,1.561-3.509,4.147-3.416,6.865l0.017,0.511c0.019,0.553,0.04,1.107,0.04,1.664
			v0.731c-0.186,45.29-17.461,86.654-45.668,117.994c-2.882,3.201-2.702,8.117,0.344,11.163c3.312,3.312,8.72,3.151,11.855-0.332
			c31.691-35.208,49.224-80.18,49.633-127.902c14.422-10.743,26.595-23.876,36.227-39.093
			C440.029,169.5,439.434,165.057,436.352,162.391z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <svg
        className="ml-2"
        height="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981C26.628,123.333,0,187.621,0,256
			s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.981S512,324.379,512,256
			S485.372,123.333,437.019,74.981z M256,495.832C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168
			S495.832,123.756,495.832,256S388.244,495.832,256,495.832z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M347.845,97.011H164.155c-37.024,0-67.144,30.121-67.144,67.144v183.692c0,37.022,30.121,67.143,67.144,67.143h183.692
			c37.022,0,67.143-30.121,67.143-67.144V164.155C414.989,127.131,384.869,97.011,347.845,97.011z M398.821,347.845
			c0,28.108-22.868,50.976-50.976,50.976H164.155c-28.108,0-50.976-22.868-50.976-50.976V164.155
			c0-28.108,22.868-50.976,50.976-50.976h183.692c28.107,0,50.975,22.868,50.975,50.976V347.845z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M339.402,251.22c-2.391-42.533-37.002-76.75-79.558-78.669c-49.108-2.214-89.535,38.232-87.292,87.346
			c1.945,42.56,36.19,77.154,78.728,79.51c17.951,0.995,34.762-3.727,48.803-12.494c4.374-2.731,5.087-8.814,1.441-12.459
			c-0.039-0.039-0.077-0.077-0.115-0.115c-2.657-2.658-6.778-3.059-9.971-1.075c-10.491,6.519-22.892,10.241-36.158,10.102
			c-37.455-0.394-67.676-31.844-66.621-69.286c1.061-37.681,33.215-67.721,71.657-65.312c33.126,2.076,60.09,28.49,62.819,61.569
			c1.111,13.475-1.787,26.206-7.61,37.157c-1.667,3.136-1.153,6.982,1.358,9.493c0.041,0.041,0.083,0.083,0.124,0.124
			c3.773,3.773,10.154,2.886,12.675-1.816C336.664,282.269,340.301,267.197,339.402,251.22z"
            />
          </g>
        </g>
        <g>
          <g>
            <circle cx="342.232" cy="158.989" r="21.558" />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    <div className="mt-5 flex flex-row justify-center items-start">
      <div className="px-3 text-center">
        <p className="text-gray-500">Following</p>
        <b className="text-2xl">561</b>
      </div>
      <div className="px-3 text-center">
        <p className="text-gray-500">Tweets</p>
        <b className="text-2xl">1,337</b>
      </div>
      <div className="px-3 text-center">
        <p className="text-gray-500">Followers</p>
        <b className="text-2xl">781</b>
      </div>
    </div>
  </div>
</div>

</div>

  </div> */}

      <>
        {/* Component Code */}
        <div className="max-w-screen-xl mx-auto relative">
          <div className="sm:flex items-start">
            {/* <div className="md:w-8/12 sm:w-6/12 p-8">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <svg
              className="h-6 mr-3"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 455.005 455.005"
              style={{ enableBackground: "new 0 0 455.005 455.005" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343
    c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428
    c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423
    c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615
    c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595
    l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72
    C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196
    c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956
    c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004
    C455.004,277.119,451.78,270.719,446.158,267.615z"
                />
                <path
                  d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126
    c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126
    C350.916,232.303,352.298,232.676,353.664,232.676z"
                />
                <path
                  d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82
    c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905
    C320.941,252.21,322.318,252.58,323.68,252.58z"
                />
                <path
                  d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062
    c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"
                />
                <path
                  d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219
    c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37
    c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464
    c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351
    c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"
                />
                <path
                  d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409
    c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132
    C266.219,292.387,268.669,291.131,270.089,288.846z"
                />
                <path
                  d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132
    c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455
    C60.338,188.266,55.714,189.346,53.527,192.864z"
                />
              </g>
            </svg>
            <a href="#" className="font-semibold inline-block">
              Fashion Blog
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div className="mb-5 pb-5 w-full lg:flex justify-center items-center border-b">
          <a href="#">
            <div
              className="h-56 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://tailwindcss.com/img/card-left.jpg")'
              }}
              title="Woman holding a mug"
            ></div>
          </a>
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="">
              <a
                href="#"
                className="text-sm text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold text-md sm:text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!{" "}
              </a>
              <p className="text-gray-700 text-xs sm:text-base mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <a
              href="#"
              className="text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block p-2"
            >
              Simplest Salad Recipe ever
            </a>
          </div>
        </div>
      </div> */}

            <section class="text-gray-600 body-font md:w-12/12 sm:w-6/12 lg:w-full mb-">
              <div class="container  py-24 mx-auto flex flex-col">
                <div class=" mx-auto">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 mb-3 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Jese Leos
                      </a>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        Graphic Designer, educator &amp; CEO Flowbite
                      </p>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        <time
                          pubdate=""
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                  </div>
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=2000&t=st=1668688176~exp=1668688776~hmac=6d81c58882191a73e60c57b217d4d2dbac6a42768f4411ad8301c879ff04e45d"
                    />
                  </div>
                  <div class="flex flex-col mt-10">
                    <div class="sm:pl-8 sm:py-8 sm:border-l border-gray-900 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <p class="leading-relaxed text-lg mb-4">
                        Meggings portland fingerstache lyft, post-ironic fixie
                        man bun banh mi umami everyday carry hexagon locavore
                        direct trade art party. Locavore small batch listicle
                        gastropub farm-to-table lumbersexual salvia messenger
                        bag. Coloring book flannel truffaut craft beer drinking
                        vinegar sartorial, disrupt fashion axe normcore meh
                        butcher. Portland 90's scenester vexillologist forage
                        post-ironic asymmetrical, chartreuse disrupt butcher
                        paleo intelligentsia pabst before they sold out four
                        loko. 3 wolf moon brooklyn.
                      </p>
                      <a class="text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="mt-5"></hr>
              </div>

              <h1 className="font-bold text-amber-700">
                Here are some examples of text essay topics: By the end of
                Animal Farm, there is little difference between the tyranny of
                Napoleon and Farmer Jones. Do you agree? To Kill a Mockingbird
                demonstrates how this harsh and unforgiving world erodes the
                naivety and innocence of childhood. Discuss. Romeo and Juliet
                find themselves torn between their feelings and their loyalty to
                family. What role does loyalty play in Romeo and Juliet? In each
                of these topics, you’re presented with an idea that you need to
                respond to with a thoughtful, informed and focused piece of
                writing. Planning Start by underlining the key phrases in the
                essay topic. A successful text essay is one that focuses on
                these ideas and has a clear understanding of key terms. By the
                end of Animal Farm, there is little difference between the
                tyranny of Napoleon and Farmer Jones. Do you agree? In this
                essay topic on Animal Farm, for example, it’s worthwhile
                precisely defining the word ‘tyranny’ and focusing your response
                on these characters. Romeo and Juliet find themselves torn
                between their feelings and their loyalty to family. What role
                does loyalty play in Romeo and Juliet? In this essay topic on
                Romeo and Juliet, you not only need to define the term loyalty
                but also think about its meaning within the context of the play.
                Should Romeo and Juliet be loyal to each other? Their families?
                Their friends? What happens when these loyalties are challenged?
                Once you’ve unpacked the topic, it’s time to start taking a
                close look at the text. These essays are an invitation to
                express a sophisticated reading of the text so it pays to go
                through the text and jot down characters, scenes and quotes
                relevant to the topic. Taking time to think about the topic and
                find examples will help you write a more sophisticated text
                essay. Remember, your English teacher wants to see insight and
                knowledge. Now that you’ve thought about the topic in detail and
                planned out your response, it’s time to get writing. Remember
                that text essays are written in a formal style. Avoid writing in
                the first person, e.g. I think or I believe. Remember to write
                in the ‘literary present’. This is the practice of using present
                tense when writing about books and films. Rather than write:
                Juliet was overcome with grief and killed herself. You would
                write: Juliet is overcome with grief and kills herself.
                Structure In terms of structure, a text essay must have an
                introduction, body paragraphs and a conclusion. Introduction The
                introduction to a text essay should clearly state your
                contention on the topic. There should be no confusion about your
                take on the essay prompt. Do you agree? Disagree? Or partially
                agree? An introduction also provides an overview of the main
                points that will appear in the body of your essay. Try to avoid
                listing your arguments. Instead, give a sense of how they relate
                to the topic. When you’re writing an introduction, show that you
                understand the topic by expressing it in your own words. Avoid
                simply restating the topic. Try to find appropriate synonyms for
                these key terms that both express your understanding of the
                topic and show how expressive you are. Here’s an introduction to
                the following essay topic on Of Mice and Men: Hopes and dreams
                help people to survive even if they never become reality. How
                true is this for the characters in Of Mice and Men? Of Mice and
                Men, written by John Steinbeck and set during the 1930s,
                captures the poverty and suffering of the Great Depression.
                Throughout the novella, Steinbeck explores how hopes and dreams
                sustain characters during difficult times. George’s simple dream
                of owning a small farm provides comfort for both him and Lennie.
                Candy and Crooks also take solace in this dream, yearning for a
                life free from solitude and discrirmination. Even when they are
                little more than unattainable delusions, these dreams tend to
                provide consolation: Curley’s wife entertains unlikely dreams of
                becoming an actress which provide relief from the isolation of
                the farm and her dissatisfying marriage. Also note that you can
                use a short quotation from the novel in your introduction as
                long as it is integral to the essay topic. Remember, you
                introduction will: state your contention; outline the key points
                that will appear in the body of your essay. Body Use TEEL
                structure to ensure that your body paragraphs are logical and
                focused. Begin with a topic sentence that explains the idea
                you’re about to discuss and how it relates to the topic. Go on
                to explain the ideas, supporting your discussion with close
                reference to characters, scenes, and language features—such as
                metaphors or language choices—in the text. Support your
                discussion by using short quotations from novel in sentences of
                your own. End with another topic sentence that ties these ideas
                back to the essay prompt. Here is an example of a body paragraph
                on the following topic for Animal Farm: By the end of Animal
                Farm, there is little difference between the tyranny of Napoleon
                and Farmer Jones. Do you agree? There is no question that Farmer
                Jones is a cruel and neglectful master who tyrannises over the
                animals on Manor Farm. At the beginning of the novel, Orwell
                reveals that Jones was “too drunk” to remember to shut the pop
                holes which allows the animals to congregate and listen to Old
                Major’s speech. During the speech, Old Major describes how their
                lives are “miserable, laborious and short.” The animals are
                forced to work to the “last atom of their strength” and know
                nothing except “misery and slavery”. It is clear that Farmer
                Jones is cruel. Old Major describes how the young pigs will
                “scream their lives out” at the block. The dogs, when they
                outlive their usefulness, will be drowned in the “nearest pond”.
                This callous and unfair treatment, however, doesn’t seem to be
                motivated by malice or selfishness. It is the simple pragmatism
                of a farmer. Inspired by the centuries of oppression by the
                Tsarist regime in Russia, Farmer Jones is unquestionably a cruel
                and heartless master. His tyranny, however, pales in comparison
                to the cunning, selfishness and manipulation of the pigs.
                Textual evidence Effective body paragraphs make frequent use of
                relevant quotations to support the discussion. The best way to
                do this is by incorporating short, direct quotations from the
                text into your own sentences, e.g. Old Major believed that
                anything that went upon “two legs is an enemy.” You can
                introduce longer quotes using a colon, e.g. Old Major believed
                that all men were enemies: “Whatever goes upon two legs is an
                enemy.” But try to avoid quoting large slabs from the text. Your
                teacher is much more interested in reading your discussion of
                the novel. The above paragraph is effective because the quotes
                are short and integrated seamlessly into sentences. When you’re
                explaining ideas, you will often find yourself using the word
                ‘shows’ or ‘demonstrates’. Here are some common synonyms you can
                use for these words. Highlights, reveals, illustrates,
                demonstrates, underscores, emphasis, draws attention to,
                exemplifies, epitomises, shows, typifies, embodies. Remember
                that each of these words has a slightly different meaning and
                always check if it’s right for what you are trying to say. When
                you’re writing an essay, here are some useful words you can use
                to link ideas: In: By, during, throughout, towards the
                beginning, towards the end. And: Additionally, also,
                furthermore, moreover, similarly. But: Although, despite this,
                even so, however, in spite of this, nevertheless, nonetheless,
                notwithstanding, still, though. Contrast: As opposed to, in
                contrast, nevertheless, nonetheless, on the other hand, whereas.
                Similarity: By the same token, similarly. Therefore:
                Accordingly, as a consequence, as a result, consequently, hence,
                inevitably, thus. Concluding: certainly, definitely, indeed, of
                course, undoubtedly, unquestionably, without, doubt, without
                question. Remember that a body paragraph will: begin with a
                topic sentence that explains the idea you’re about to discuss
                and how it relates to the topic explain your ideas clearly,
                where appropriate commenting on: characters scenes language
                features, such as metaphors, symbols and avoid simply retelling
                the story. use short quotations from the text in sentences of
                your own to support your discussion finish with a link sentence
                to tie your ideas back to the topic. Conclusion The conclusion
                of your essay should briefly recap that ideas you’ve discussed
                and tie up your argument. A good conclusion should leave your
                reader with the impression that you have convincingly answered
                the essay topic. Try to avoid repeating yourself. You may use
                short quotations in the conclusion if it’s relevant. Ensure you
                don’t introduce any new points. Here’s a sample conclusion on
                this essay topic for To Kill a Mockingbird:To Kill a Mockingbird
                demonstrates how this harsh and unforgiving world erodes the
                naivety and innocence of childhood. Discuss. Ultimately, Harper
                Lee demonstrates how a harsh and unforgiving world inevitably
                erodes the naivety and innocence of childhood. At the beginning
                of the story, Scout views the world through the eyes of a child,
                albeit tainted by the prejudice of Maycomb. Through new
                experiences—particularly the trial of Robinson—Scout’s views and
                opinions change and, by novel’s conclusion, she has blossomed
                into a more understanding person. Lee uses the character of
                Scout to show the nuance of losing one’s innocence, how
                understanding is ultimately gained at the expense of innocence.
                This conclusion is effective because it: restates the contention
                recaps key points in the essay brings the discussion to a close
                Remember, when writing a text essay: Develop a clear contention
                Plan your essay thoroughly Ensure you text essay has a clear
                introduction, body and conclusion Use TEEL structures Make use
                of short, relevant quotations to support your discussion
              </h1>
            </section>

            <div className="sticky top-0 md:w-6/12 sm:w-6/12 p-8 sm:border-l">
              <div className="border-b mb-5 flex justify-between text-sm">
                <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                  <svg
                    className="h-6 mr-3"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 455.005 455.005"
                    style={{ enableBackground: "new 0 0 455.005 455.005" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343
    c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428
    c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423
    c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615
    c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595
    l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72
    C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196
    c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956
    c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004
    C455.004,277.119,451.78,270.719,446.158,267.615z"
                      />
                      <path
                        d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126
    c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126
    C350.916,232.303,352.298,232.676,353.664,232.676z"
                      />
                      <path
                        d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82
    c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905
    C320.941,252.21,322.318,252.58,323.68,252.58z"
                      />
                      <path
                        d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062
    c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"
                      />
                      <path
                        d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219
    c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37
    c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464
    c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351
    c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"
                      />
                      <path
                        d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409
    c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132
    C266.219,292.387,268.669,291.131,270.089,288.846z"
                      />
                      <path
                        d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132
    c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455
    C60.338,188.266,55.714,189.346,53.527,192.864z"
                      />
                    </g>
                  </svg>
                  <a href="#" className="font-semibold inline-block">
                    Fashion Blog
                  </a>
                </div>
                <a href="#">See All</a>
              </div>

              <div className="mb-5 pb-5 w-full border-b">
                <a href="#">
                  <div
                    className="h-56 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage:
                        'url("https://tailwindcss.com/img/card-left.jpg")',
                    }}
                    title="Woman holding a mug"
                  ></div>
                </a>
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                  <div className="">
                    <a
                      href="#"
                      className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
                    >
                      Fashion
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      The perfect summer sweater that you can wear!{" "}
                    </a>
                    <p className="text-gray-700 text-xs mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>

              {
                filtered.map((e) => {
                  return (
                    <div className="flex items-start">
                      <a href="#" className="inline-block mr-3">
                        <img
                          className="w-20 h-20 bg-cover bg-center py-1"
                          src={urlFor(e.image && e.image[0])}
                        />
                      </a>
                      <div className="text-sm w-2/3 my-auto">
                        <p className="text-gray-600 text-xs">{e.publishedAt}</p>
                        <Link
                          href={`/post/${e.slug.current}`}
                          className="text-gray-900 font-medium text-lg hover:text-indigo-600 leading-none"
                        >
                          {e.title}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <Footer />
        </div>
      </>
    </>
  );
  //    <div>
  //    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  //  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
  //    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
  //      <header className="mb-4 lg:mb-6 not-format">
  //        <address className="flex items-center mb-6 not-italic">

  //       </address>
  //       <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
  //         Best practices for successful prototypes
  //       </h1>
  //     </header>
  //     <p className="lead">
  //       Flowbite is an open-source library of UI components built with the
  //       utility-first classes from Tailwind CSS. It also includes interactive
  //       elements such as dropdowns, modals, datepickers.
  //     </p>
  //     <p>
  //       Before going digital, you might benefit from scribbling down some
  //       ideas in a sketchbook. This way, you can think things through before
  //       committing to an actual design project.
  //     </p>
  //     <p>
  //       But then I found a{" "}
  //       <a href="https://flowbite.com">
  //         component library based on Tailwind CSS called Flowbite
  //       </a>
  //       . It comes with the most commonly used UI components, such as buttons,
  //       navigation bars, cards, form elements, and more which are conveniently
  //       built with the utility classes from Tailwind CSS.
  //     </p>
  //     <figure>
  //       <img
  //         src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
  //         alt=""
  //       />
  //       <figcaption>Digital art by Anonymous</figcaption>
  //     </figure>
  //     <h2>Getting started with Flowbite</h2>
  //     <p>
  //       First of all you need to understand how Flowbite works. This library
  //       is not another framework. Rather, it is a set of components based on
  //       Tailwind CSS that you can just copy-paste from the documentation.
  //     </p>
  //     <p>
  //       It also includes a JavaScript file that enables interactive
  //       components, such as modals, dropdowns, and datepickers which you can
  //       optionally include into your project via CDN or NPM.
  //     </p>
  //     <p>
  //       You can check out the{" "}
  //       <a href="https://flowbite.com/docs/getting-started/quickstart/">
  //         quickstart guide
  //       </a>{" "}
  //       to explore the elements by including the CDN files into your project.
  //       But if you want to build a project with Flowbite I recommend you to
  //       follow the build tools steps so that you can purge and minify the
  //       generated CSS.
  //     </p>
  //     <p>
  //       You'll also receive a lot of useful application UI, marketing UI, and
  //       e-commerce pages that can help you get started with your projects even
  //       faster. You can check out this{" "}
  //       <a href="https://flowbite.com/docs/components/tables/">
  //         comparison table
  //       </a>{" "}
  //       to better understand the differences between the open-source and pro
  //       version of Flowbite.
  //     </p>
  //     <h2>When does design come in handy?</h2>
  //     <p>
  //       While it might seem like extra work at a first glance, here are some
  //       key moments in which prototyping will come in handy:
  //     </p>
  //     <ol>
  //       <li>
  //         <strong>Usability testing</strong>. Does your user know how to exit
  //         out of screens? Can they follow your intended user journey and buy
  //         something from the site you’ve designed? By running a usability
  //         test, you’ll be able to see how users will interact with your design
  //         once it’s live;
  //       </li>
  //       <li>
  //         <strong>Involving stakeholders</strong>. Need to check if your GDPR
  //         consent boxes are displaying properly? Pass your prototype to your
  //         data protection team and they can test it for real;
  //       </li>
  //       <li>
  //         <strong>Impressing a client</strong>. Prototypes can help explain or
  //         even sell your idea by providing your client with a hands-on
  //         experience;
  //       </li>
  //       <li>
  //         <strong>Communicating your vision</strong>. By using an interactive
  //         medium to preview and test design elements, designers and developers
  //         can understand each other — and the project — better.
  //       </li>
  //     </ol>
  //     <h3>Laying the groundwork for best design</h3>
  //     <p>
  //       Before going digital, you might benefit from scribbling down some
  //       ideas in a sketchbook. This way, you can think things through before
  //       committing to an actual design project.
  //     </p>
  //     <p>
  //       Let's start by including the CSS file inside the <code>head</code> tag
  //       of your HTML.
  //     </p>
  //     <h3>Understanding typography</h3>
  //     <h4>Type properties</h4>
  //     <p>
  //       A typeface is a collection of letters. While each letter is unique,
  //       certain shapes are shared across letters. A typeface represents shared
  //       patterns across a collection of letters.
  //     </p>
  //     <h4>Baseline</h4>
  //     <p>
  //       A typeface is a collection of letters. While each letter is unique,
  //       certain shapes are shared across letters. A typeface represents shared
  //       patterns across a collection of letters.
  //     </p>
  //     <h4>Measurement from the baseline</h4>
  //     <p>
  //       A typeface is a collection of letters. While each letter is unique,
  //       certain shapes are shared across letters. A typeface represents shared
  //       patterns across a collection of letters.
  //     </p>
  //     <h3>Type classification</h3>
  //     <h4>Serif</h4>
  //     <p>
  //       A serif is a small shape or projection that appears at the beginning
  //       or end of a stroke on a letter. Typefaces with serifs are called serif
  //       typefaces. Serif fonts are classified as one of the following:
  //     </p>
  //     <h4>Old-Style serifs</h4>
  //     <ul>
  //       <li>Low contrast between thick and thin strokes</li>
  //       <li>Diagonal stress in the strokes</li>
  //       <li>Slanted serifs on lower-case ascenders</li>
  //     </ul>
  //     <img
  //       src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
  //       alt=""
  //     />
  //     <ol>
  //       <li>Low contrast between thick and thin strokes</li>
  //       <li>Diagonal stress in the strokes</li>
  //       <li>Slanted serifs on lower-case ascenders</li>
  //     </ol>
  //     <h3>Laying the best for successful prototyping</h3>
  //     <p>
  //       A serif is a small shape or projection that appears at the beginning:
  //     </p>
  //     <blockquote>
  //       <p>
  //         Flowbite is just awesome. It contains tons of predesigned components
  //         and pages starting from login screen to complex dashboard. Perfect
  //         choice for your next SaaS application.
  //       </p>
  //     </blockquote>
  //     <h4>Code example</h4>
  //     <p>
  //       A serif is a small shape or projection that appears at the beginning
  //       or end of a stroke on a letter. Typefaces with serifs are called serif
  //       typefaces. Serif fonts are classified as one of the following:
  //     </p>
  //     <pre>
  //       <code className="language-html">
  //         &lt;dl class="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900
  //         sm:grid-cols-3 dark:text-white"&gt;{"\n"}&lt;div class="flex
  //         flex-col justify-center items-center"&gt;{"\n"}
  //         {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
  //         {"\n"}
  //         {"  "}&lt;dd class="text-lg font-normal text-gray-500
  //         dark:text-gray-400"&gt;developers&lt;/dd&gt;{"\n"}&lt;/div&gt;{"\n"}
  //         &lt;div class="flex flex-col justify-center items-center"&gt;{"\n"}
  //         {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
  //         {"\n"}
  //         {"  "}&lt;dd class="text-lg font-normal text-gray-500
  //         dark:text-gray-400"&gt;contributors&lt;/dd&gt;{"\n"}&lt;/div&gt;
  //         {"\n"}&lt;div class="flex flex-col justify-center items-center"&gt;
  //         {"\n"}
  //         {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
  //         {"\n"}
  //         {"  "}&lt;dd class="text-lg font-normal text-gray-500
  //         dark:text-gray-400"&gt;organizations&lt;/dd&gt;{"\n"}&lt;/div&gt;
  //         {"\n"}&lt;/dl&gt;{"\n"}
  //       </code>
  //     </pre>
  //     <h4>Table example</h4>
  //     <p>
  //       A serif is a small shape or projection that appears at the beginning
  //       or end of a stroke on a letter.
  //     </p>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Country</th>
  //           <th>Date &amp; Time</th>
  //           <th>Amount</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>United States</td>
  //           <td>April 21, 2021</td>
  //           <td>
  //             <strong>$2,300</strong>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Canada</td>
  //           <td>May 31, 2021</td>
  //           <td>
  //             <strong>$300</strong>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>United Kingdom</td>
  //           <td>June 3, 2021</td>
  //           <td>
  //             <strong>$2,500</strong>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Australia</td>
  //           <td>June 23, 2021</td>
  //           <td>
  //             <strong>$3,543</strong>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Germany</td>
  //           <td>July 6, 2021</td>
  //           <td>
  //             <strong>$99</strong>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>France</td>
  //           <td>August 23, 2021</td>
  //           <td>
  //             <strong>$2,540</strong>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <h3>Best practices for setting up your prototype</h3>
  //     <p>
  //       <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
  //       close a prototype will be to the real deal. If you’re simply preparing
  //       a quick visual aid for a presentation, a low-fidelity prototype — like
  //       a wireframe with placeholder images and some basic text — would be
  //       more than enough. But if you’re going for more intricate usability
  //       testing, a high-fidelity prototype — with on-brand colors, fonts and
  //       imagery — could help get more pointed results.
  //     </p>
  //     <p>
  //       <strong>Consider your user</strong>. To create an intuitive user flow,
  //       try to think as your user would when interacting with your product.
  //       While you can fine-tune this during beta testing, considering your
  //       user’s needs and habits early on will save you time by setting you on
  //       the right path.
  //     </p>
  //     <p>
  //       <strong>Start from the inside out</strong>. A nice way to both
  //       organize your tasks and create more user-friendly prototypes is by
  //       building your prototypes ‘inside out’. Start by focusing on what will
  //       be important to your user, like a Buy now button or an image gallery,
  //       and list each element by order of priority. This way, you’ll be able
  //       to create a prototype that puts your users’ needs at the heart of your
  //       design.
  //     </p>
  //     <p>
  //       And there you have it! Everything you need to design and share
  //       prototypes — right in Flowbite Figma.
  //     </p>
  //     <section className="not-format">
  //       <div className="flex justify-between items-center mb-6">
  //         <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
  //           Discussion (20)
  //         </h2>
  //       </div>
  //       <form className="mb-6">
  //         <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  //           <label htmlFor="comment" className="sr-only">
  //             Your comment
  //           </label>
  //           <textarea
  //             id="comment"
  //             rows={6}
  //             className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
  //             placeholder="Write a comment..."
  //             required=""
  //             defaultValue={""}
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
  //         >
  //           Post comment
  //         </button>
  //       </form>
  //       <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
  //         <footer className="flex justify-between items-center mb-2">
  //           <div className="flex items-center">
  //             <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
  //               <img
  //                 className="mr-2 w-6 h-6 rounded-full"
  //                 src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
  //                 alt="Michael Gough"
  //               />
  //               Michael Gough
  //             </p>
  //             <p className="text-sm text-gray-600 dark:text-gray-400">
  //               <time
  //                 pubdate=""
  //                 dateTime="2022-02-08"
  //                 title="February 8th, 2022"
  //               >
  //                 Feb. 8, 2022
  //               </time>
  //             </p>
  //           </div>
  //           <button
  //             id="dropdownComment1Button"
  //             data-dropdown-toggle="dropdownComment1"
  //             className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //             type="button"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               aria-hidden="true"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
  //             </svg>
  //             <span className="sr-only">Comment settings</span>
  //           </button>
  //           {/* Dropdown menu */}
  //           <div
  //             id="dropdownComment1"
  //             className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  //           >
  //             <ul
  //               className="py-1 text-sm text-gray-700 dark:text-gray-200"
  //               aria-labelledby="dropdownMenuIconHorizontalButton"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Edit
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Remove
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Report
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </footer>
  //         <p>
  //           Very straight-to-point article. Really worth time reading. Thank
  //           you! But tools are just the instruments for the UX designers. The
  //           knowledge of the design tools are as important as the creation of
  //           the design strategy.
  //         </p>
  //         <div className="flex items-center mt-4 space-x-4">
  //           <button
  //             type="button"
  //             className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
  //           >
  //             <svg
  //               aria-hidden="true"
  //               className="mr-1 w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  //               />
  //             </svg>
  //             Reply
  //           </button>
  //         </div>
  //       </article>
  //       <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
  //         <footer className="flex justify-between items-center mb-2">
  //           <div className="flex items-center">
  //             <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
  //               <img
  //                 className="mr-2 w-6 h-6 rounded-full"
  //                 src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  //                 alt="Jese Leos"
  //               />
  //               Jese Leos
  //             </p>
  //             <p className="text-sm text-gray-600 dark:text-gray-400">
  //               <time
  //                 pubdate=""
  //                 dateTime="2022-02-12"
  //                 title="February 12th, 2022"
  //               >
  //                 Feb. 12, 2022
  //               </time>
  //             </p>
  //           </div>
  //           <button
  //             id="dropdownComment2Button"
  //             data-dropdown-toggle="dropdownComment2"
  //             className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //             type="button"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               aria-hidden="true"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
  //             </svg>
  //             <span className="sr-only">Comment settings</span>
  //           </button>
  //           {/* Dropdown menu */}
  //           <div
  //             id="dropdownComment2"
  //             className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  //           >
  //             <ul
  //               className="py-1 text-sm text-gray-700 dark:text-gray-200"
  //               aria-labelledby="dropdownMenuIconHorizontalButton"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Edit
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Remove
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Report
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </footer>
  //         <p>Much appreciated! Glad you liked it ☺️</p>
  //         <div className="flex items-center mt-4 space-x-4">
  //           <button
  //             type="button"
  //             className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
  //           >
  //             <svg
  //               aria-hidden="true"
  //               className="mr-1 w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  //               />
  //             </svg>
  //             Reply
  //           </button>
  //         </div>
  //       </article>
  //       <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
  //         <footer className="flex justify-between items-center mb-2">
  //           <div className="flex items-center">
  //             <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
  //               <img
  //                 className="mr-2 w-6 h-6 rounded-full"
  //                 src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
  //                 alt="Bonnie Green"
  //               />
  //               Bonnie Green
  //             </p>
  //             <p className="text-sm text-gray-600 dark:text-gray-400">
  //               <time
  //                 pubdate=""
  //                 dateTime="2022-03-12"
  //                 title="March 12th, 2022"
  //               >
  //                 Mar. 12, 2022
  //               </time>
  //             </p>
  //           </div>
  //           <button
  //             id="dropdownComment3Button"
  //             data-dropdown-toggle="dropdownComment3"
  //             className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //             type="button"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               aria-hidden="true"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
  //             </svg>
  //             <span className="sr-only">Comment settings</span>
  //           </button>
  //           {/* Dropdown menu */}
  //           <div
  //             id="dropdownComment3"
  //             className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  //           >
  //             <ul
  //               className="py-1 text-sm text-gray-700 dark:text-gray-200"
  //               aria-labelledby="dropdownMenuIconHorizontalButton"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Edit
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Remove
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Report
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </footer>
  //         <p>
  //           The article covers the essentials, challenges, myths and stages
  //           the UX designer should consider while creating the design
  //           strategy.
  //         </p>
  //         <div className="flex items-center mt-4 space-x-4">
  //           <button
  //             type="button"
  //             className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
  //           >
  //             <svg
  //               aria-hidden="true"
  //               className="mr-1 w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  //               />
  //             </svg>
  //             Reply
  //           </button>
  //         </div>
  //       </article>
  //       <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
  //         <footer className="flex justify-between items-center mb-2">
  //           <div className="flex items-center">
  //             <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
  //               <img
  //                 className="mr-2 w-6 h-6 rounded-full"
  //                 src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
  //                 alt="Helene Engels"
  //               />
  //               Helene Engels
  //             </p>
  //             <p className="text-sm text-gray-600 dark:text-gray-400">
  //               <time
  //                 pubdate=""
  //                 dateTime="2022-06-23"
  //                 title="June 23rd, 2022"
  //               >
  //                 Jun. 23, 2022
  //               </time>
  //             </p>
  //           </div>
  //           <button
  //             id="dropdownComment4Button"
  //             data-dropdown-toggle="dropdownComment4"
  //             className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //             type="button"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               aria-hidden="true"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
  //             </svg>
  //           </button>
  //           {/* Dropdown menu */}
  //           <div
  //             id="dropdownComment4"
  //             className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  //           >
  //             <ul
  //               className="py-1 text-sm text-gray-700 dark:text-gray-200"
  //               aria-labelledby="dropdownMenuIconHorizontalButton"
  //             >
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Edit
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Remove
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //                 >
  //                   Report
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </footer>
  //         <p>
  //           Thanks for sharing this. I do came from the Backend development
  //           and explored some of the tools to design my Side Projects.
  //         </p>
  //         <div className="flex items-center mt-4 space-x-4">
  //           <button
  //             type="button"
  //             className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
  //           >
  //             <svg
  //               aria-hidden="true"
  //               className="mr-1 w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  //               />
  //             </svg>
  //             Reply
  //           </button>
  //         </div>
  //       </article>
  //     </section>
  //   </article>
  // </div>
  // </main>
  // <aside
  // aria-label="Related articles"
  // className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
  // >
  // <div className="px-4 mx-auto max-w-screen-xl">
  //   <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
  //     Related articles
  //   </h2>
  //   <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
  //     <article className="max-w-xs">
  //       <a href="#">
  //         <img
  //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
  //           className="mb-5 rounded-lg"
  //           alt="Image 1"
  //         />
  //       </a>
  //       <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
  //         <a href="#">Our first office</a>
  //       </h2>
  //       <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
  //         Over the past year, Volosoft has undergone many changes! After
  //         months of preparation.
  //       </p>
  //       <a
  //         href="#"
  //         className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
  //       >
  //         Read in 2 minutes
  //       </a>
  //     </article>
  //     <article className="max-w-xs">
  //       <a href="#">
  //         <img
  //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
  //           className="mb-5 rounded-lg"
  //           alt="Image 2"
  //         />
  //       </a>
  //       <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
  //         <a href="#">Enterprise design tips</a>
  //       </h2>
  //       <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
  //         Over the past year, Volosoft has undergone many changes! After
  //         months of preparation.
  //       </p>
  //       <a
  //         href="#"
  //         className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
  //       >
  //         Read in 12 minutes
  //       </a>
  //     </article>
  //     <article className="max-w-xs">
  //       <a href="#">
  //         <img
  //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
  //           className="mb-5 rounded-lg"
  //           alt="Image 3"
  //         />
  //       </a>
  //       <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
  //         <a href="#">We partnered with Google</a>
  //       </h2>
  //       <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
  //         Over the past year, Volosoft has undergone many changes! After
  //         months of preparation.
  //       </p>
  //       <a
  //         href="#"
  //         className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
  //       >
  //         Read in 8 minutes
  //       </a>
  //     </article>
  //     <article className="max-w-xs">
  //       <a href="#">
  //         <img
  //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
  //           className="mb-5 rounded-lg"
  //           alt="Image 4"
  //         />
  //       </a>
  //       <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
  //         <a href="#">Our first project with React</a>
  //       </h2>
  //       <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
  //         Over the past year, Volosoft has undergone many changes! After
  //         months of preparation.
  //       </p>
  //       <a
  //         href="#"
  //         className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
  //       >
  //         Read in 4 minutes
  //       </a>
  //     </article>
  //   </div>
  // </div>
  // </aside>
  // <section className="bg-white dark:bg-gray-900">
  // <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  //   <div className="mx-auto max-w-screen-md sm:text-center">
  //     <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
  //       Sign up for our newsletter
  //     </h2>
  //     <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
  //       Stay up to date with the roadmap progress, announcements and exclusive
  //       discounts feel free to sign up with your email.
  //     </p>
  //     <form action="#">
  //       <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
  //         <div className="relative w-full">
  //           <label
  //             htmlFor="email"
  //             className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  //           >
  //             Email address
  //           </label>
  //           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
  //             <svg
  //               className="w-5 h-5 text-gray-500 dark:text-gray-400"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  //             </svg>
  //           </div>
  //           <input
  //             className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //             placeholder="Enter your email"
  //             type="email"
  //             id="email"
  //             required=""
  //           />
  //         </div>
  //         <div>
  //           <button
  //             type="submit"
  //             className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //           >
  //             Subscribe
  //           </button>
  //         </div>
  //       </div>
  //       <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
  //         We care about the protection of your data.{" "}
  //         <a
  //           href="#"
  //           className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
  //         >
  //           Read our Privacy Policy
  //         </a>
  //         .
  //       </div>
  //     </form>
  //   </div>
  // </div>
  // </section>
  // <footer className="bg-gray-50 dark:bg-gray-800">
  // <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
  //   <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
  //     <div>
  //       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
  //         Company
  //       </h2>
  //       <ul className="text-gray-500 dark:text-gray-400">
  //         <li className="mb-4">
  //           <a href="#" className=" hover:underline">
  //             About
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Careers
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Brand Center
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Blog
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //     <div>
  //       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
  //         Help center
  //       </h2>
  //       <ul className="text-gray-500 dark:text-gray-400">
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Discord Server
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Twitter
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Facebook
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Contact Us
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //     <div>
  //       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
  //         Legal
  //       </h2>
  //       <ul className="text-gray-500 dark:text-gray-400">
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Privacy Policy
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Licensing
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Terms
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //     <div>
  //       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
  //         Company
  //       </h2>
  //       <ul className="text-gray-500 dark:text-gray-400">
  //         <li className="mb-4">
  //           <a href="#" className=" hover:underline">
  //             About
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Careers
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Brand Center
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Blog
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //     <div>
  //       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
  //         Download
  //       </h2>
  //       <ul className="text-gray-500 dark:text-gray-400">
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             iOS
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Android
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             Windows
  //           </a>
  //         </li>
  //         <li className="mb-4">
  //           <a href="#" className="hover:underline">
  //             MacOS
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  //   <div className="text-center">
  //     <a
  //       href="#"
  //       className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
  //     >
  //       <svg
  //         className="mr-2 h-8"
  //         viewBox="0 0 33 33"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
  //           fill="url(#paint0_linear_11430_22515)"
  //         />
  //         <path
  //           d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z"
  //           fill="url(#paint1_linear_11430_22515)"
  //         />
  //         <path
  //           d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z"
  //           fill="url(#paint2_linear_11430_22515)"
  //         />
  //         <path
  //           d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z"
  //           fill="url(#paint3_linear_11430_22515)"
  //         />
  //         <path
  //           d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z"
  //           fill="url(#paint4_linear_11430_22515)"
  //         />
  //         <path
  //           d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z"
  //           fill="url(#paint5_linear_11430_22515)"
  //         />
  //         <path
  //           d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z"
  //           fill="url(#paint6_linear_11430_22515)"
  //         />
  //         <path
  //           d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z"
  //           fill="url(#paint7_linear_11430_22515)"
  //         />
  //         <path
  //           d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z"
  //           fill="url(#paint8_linear_11430_22515)"
  //         />
  //         <defs>
  //           <linearGradient
  //             id="paint0_linear_11430_22515"
  //             x1="20.8102"
  //             y1="23.9532"
  //             x2="23.9577"
  //             y2="12.9901"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1724C9" />
  //             <stop offset={1} stopColor="#1C64F2" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint1_linear_11430_22515"
  //             x1="28.0593"
  //             y1="10.5837"
  //             x2="19.7797"
  //             y2="2.33321"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1C64F2" />
  //             <stop offset={1} stopColor="#0092FF" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint2_linear_11430_22515"
  //             x1="16.9145"
  //             y1="5.2045"
  //             x2="4.42432"
  //             y2="5.99375"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#0092FF" />
  //             <stop offset={1} stopColor="#45B2FF" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint3_linear_11430_22515"
  //             x1="16.0698"
  //             y1="28.846"
  //             x2="27.2866"
  //             y2="25.8192"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1C64F2" />
  //             <stop offset={1} stopColor="#0092FF" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint4_linear_11430_22515"
  //             x1="8.01881"
  //             y1="15.8661"
  //             x2="15.9825"
  //             y2="24.1181"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1724C9" />
  //             <stop offset={1} stopColor="#1C64F2" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint5_linear_11430_22515"
  //             x1="26.2004"
  //             y1="21.8189"
  //             x2="31.7569"
  //             y2="10.6178"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#0092FF" />
  //             <stop offset={1} stopColor="#45B2FF" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint6_linear_11430_22515"
  //             x1="6.11387"
  //             y1="9.31427"
  //             x2="3.14054"
  //             y2="20.4898"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1C64F2" />
  //             <stop offset={1} stopColor="#0092FF" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint7_linear_11430_22515"
  //             x1="21.2932"
  //             y1="8.78271"
  //             x2="10.4278"
  //             y2="11.488"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#1724C9" />
  //             <stop offset={1} stopColor="#1C64F2" />
  //           </linearGradient>
  //           <linearGradient
  //             id="paint8_linear_11430_22515"
  //             x1="7.15667"
  //             y1="21.5399"
  //             x2="14.0824"
  //             y2="31.9579"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stopColor="#0092FF" />
  //             <stop offset={1} stopColor="#45B2FF" />
  //           </linearGradient>
  //         </defs>
  //       </svg>
  //       Flowbite
  //     </a>
  //     <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
  //       © 2021-2022{" "}
  //       <a href="#" className="hover:underline">
  //         Flowbite™
  //       </a>
  //       . All Rights Reserved.
  //     </span>
  //     <ul className="flex justify-center mt-5 space-x-5">
  //       <li>
  //         <a
  //           href="#"
  //           className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 24 24"
  //             aria-hidden="true"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 24 24"
  //             aria-hidden="true"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 24 24"
  //             aria-hidden="true"
  //           >
  //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  //           </svg>
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 24 24"
  //             aria-hidden="true"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  //         >
  //           <svg
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 24 24"
  //             aria-hidden="true"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  // </footer>
  // </div>
};

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  return {
    props: { posts },
  };
};

export default Post;
