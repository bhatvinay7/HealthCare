import React, { useState, useEffect } from "react";
import axios from '../fetch/axios.js'
import { useParams, useSearchParams } from "react-router-dom";
import Markdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown ,faAngleUp,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import SkelitonLoader from "./SkelitonLoader.js";
const App = () => {
  const params = new URLSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // State for filters
  const Gender=["Male","Female"]
  const [isFIlter,setIsFilter]=useState(false)
  const [pagination,setPagination]=useState([])
  const [totalPages,setTotalPages]=useState(0)
  const [currentPage,setCurrentPage]=useState(Number(searchParams.get("page")) || 1)
  const [doctorInfo, setDoctorInfo] = useState("")
  const [query,setQuery]=useState(params || "")
  const [errorResponse, setErrorResponse] = useState([])
  const [cities, setCities] = useState([])
  const [speciality, setSpeciality] = useState([])
  const [language, setLanguage] = useState([])
  const [loading, setLoading] = useState(true)
  const [state,setState]=useState({city:Array(cities.length).fill(false),lang:Array(language.length).fill(false),speciality:Array(speciality.length).fill(false),gender:Array(Gender.length).fill(false)})
  const [open,setOpen ]=useState({city:false,lang:false,speciality:false,gender:false})
  const [filters,setFilters] = useState({
    city: "",
    speciality: "",
    gender:"",
    lang:"",
    //page:currentPage
  });
  
  function upDatePage(e,index){
    e.preventDefault()
    
    setCurrentPage(index)
    setSearchParams((previous) => {
      const newParams = new URLSearchParams(previous); // Clone previous search params
      newParams.set("page", index); // Update the "page" param
    
      return newParams;
    })
  }
  // useEffect(()=>{
  //   const params = new URLSearchParams();
  //  },[])
   
  useEffect(()=>{
    function createPagination(){
      const previousFromCurrentPage=Array.from({ length: 3 }, (_, i) => currentPage-1-i).filter((each)=>each>=1)
     
      const nextFromCurrentPage=Array.from({ length: 2 }, (_, i) => currentPage+1+i).filter((each)=>each<=totalPages)
      previousFromCurrentPage.reverse()
      const pagination=[...previousFromCurrentPage,currentPage,...nextFromCurrentPage]
      setPagination(pagination)
    }
   createPagination()
  },[currentPage,doctorInfo,filters])
  
  function applyFIlter(e){
    e.preventDefault()
    if(query){
      setIsFilter(true)
      setSearchParams(query)

    }

    // setSearchParams(() => {
    //   const newParams = new URLSearchParams(query);
    //   newParams.set("page",currentPage)
    //    // Clone previous search params
    
    //   // for (const [key, value] of Object.entries(query)) {
    //   //   newParams.set(key, value); // Merge new query parameters
    //   // }
    
    //   return newParams;
    // });
    
  }
  function handleClear(e){
    e.preventDefault()
    setIsFilter(false)
    //setCurrentPage(1)
    setSearchParams((previous) => {
      const newParams = new URLSearchParams(""); // Clone previous search params
      newParams.set("page",1); // Update the "page" param
    
      return newParams;
    })
    setQuery("")
    setState({city:Array(cities.length).fill(false),lang:Array(language.length).fill(false),speciality:Array(speciality.length).fill(false),gender:Array(Gender.length).fill(false)})
    setFilters({
      city: "",
      speciality: "",
      gender:"",
      lang:"",
      //page:currentPage
    })
  }
  // Sample doctor data
  useEffect(() =>{
    async function fetchData() {
      setSearchParams((previous) => {
        const newParams = new URLSearchParams(previous); // Clone previous search params
        newParams.set("page",currentPage); // Update the "page" param
      
        return newParams;
      })
      const response = await axios.get(`/api/allDoctor?${searchParams?.toString()}`)
      setDoctorInfo(response.data)
      setTotalPages(response.data?.[0]?.totalPages)
      console.log(response.data)
      if(searchParams?.get("city") || searchParams?.get("speciality") || searchParams?.get("gender") || searchParams?.get("lang")){
        setIsFilter(true)
      }
      //const paramsObject = Object.fromEntries([...searchParams.entries()]);
      console.log(searchParams?.toString())

    }
    try {
      fetchData()
    }
    catch (err) {
      setErrorResponse(err.response.data);
    }
  },[searchParams,currentPage])

  useEffect(() => {
    async function fetchData() {
      const response1 = await axios.get(`/api/cities`)
      setCities(response1.data?.cities)

      const response2 = await axios.get(`/api/speciality`)
      setSpeciality(response2.data?.speciality)
    

      const response3 = await axios.get(`/api/language`)
      setLanguage(response3.data?.language)
    }
    try {
      fetchData()
    }
    catch (err) {
      setErrorResponse(err.response.data);
    }
    finally {
      setLoading(false)
    }
  }, [])
  
  function handleClick(value){
   const data={...open,...value}
   setOpen(data)
  }
  // Handle filter changes
  const handleFilterChange = (e,index) => {
    let upDatedFilter=[...state[e.target.name]]
    upDatedFilter=Array(upDatedFilter.length).fill(false)
    upDatedFilter[index]=!upDatedFilter[index]
    const newState={...state,[e.target.name]:upDatedFilter}    
    setState(newState)   
    let updateFilter={...filters}
    updateFilter={...updateFilter,[e.target.name]:e.target.value}
    setFilters(updateFilter)
    
    //const params = new URLSearchParams();
    Object.entries(updateFilter).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });
    
    // Update URL query parameters
    params.set("page",1);
    setCurrentPage(1);
    setQuery(params)
    //setSearchParams(params);
    
    //   let query=Object.entries(updateFilter).filter(([key,value])=>value!="").reduce((initial,[key,value])=>{
      //     initial=initial+`&${key}=${encodeURIComponent(value)}`
      //     return initial
      //   },``)
      //  console.log(query)
      //setQuery(query ? "?" + query.slice(1) : ""); 
      
    };
    
    
    
    
    return (
    <div className="  flex h-screen relative top-20 sm:top-32 bg-white ">
      {/* Filter Section (25%) */}
      <div className=" sticky inset-0 min-h-screen h-auto w-1/5 p-6  bg-cyan-100/15 border-r flex flex-col ml-6 border-gray-200 ">
        <h2 className="text-xl font-bold self-start mb-4">Filters</h2>

        {/* Location Filter */}
        <div className={`${open.city ? "mb-0":"mb-3"}` }>
          <div className="flex justify-between bg-slate-200 rounded-tl-md rounded-tr-md hover:bg-cyan-600/60 "> 
          <h3 className=" mb-2 w-full  p-2   ">City</h3>
          {!open.city ?<FontAwesomeIcon onClick={()=>handleClick({city:!open.city})} className=" p-2" icon={faAngleDown} />
            :<FontAwesomeIcon onClick={()=>handleClick({city:!open.city})} className=" p-2" icon={faAngleUp} />}
          </div>
            {open.city ?  
          <div className=" w-full max-h-52 overflow-y-scroll pl-3 border-l-[0.5px] border-b-[0.5px] border-gray-200 border-r-[0.5px] customscrollBarscrollBar">
            {cities.map((location, index) => {
              return (

                <label key={index} className="flex items-center mb-2 text-sm">
                  <input
                    type="checkbox"
                    checked={state.city[index] ||"" }
                    value={location}
                    name="city"
                    onChange={(e) => handleFilterChange(e,index)}
                    className="mr-2  "
                  />
                  {location}
                </label>
              )
            })}
          </div>:<></>}
        </div>

        {/* Specialization Filter */}
        <div className={`${open.speciality ? "mb-0":"mb-3"}`}>
        <div className={`flex justify-between items-center  bg-slate-200 hover:bg-cyan-600/60 ${open.city?"rounded-none":"rounded-tl-md rounded-tr-md"}`}>
        <h3 className=" mb-2  rounded-tl-sm rounded-tr-sm p-2  ">Specialization</h3>
        {!open.speciality ?<FontAwesomeIcon onClick={()=>handleClick({speciality:!open.speciality})} className=" p-2" icon={faAngleDown} />
          :<FontAwesomeIcon onClick={()=>handleClick({speciality:!open.speciality})} className=" p-2" icon={faAngleUp} />}
          </div>
          {open.speciality ?
          <div className=" w-full max-h-52 overflow-y-scroll pl-3 border-l-[0.5px] border-gray-200 border-r-[0.5px] customscrollBarscrollBar">

            {speciality.map((specialization, index) => {
              return (
                <label key={index} className="flex items-center mb-2 text-sm">
                  <input
                    type="checkbox"
                    checked={state.speciality[index] ||""}
                    value={specialization}
                    name="speciality"
                    onChange={(e) => handleFilterChange(e,index)}
                    className="mr-2 "
                  />
                  {specialization}
                </label>
              )
            })}
          </div>:<></>}
        </div>

        <div className={`flex  justify-between items-center ${open.lang ? "mb-0":"mb-3"}  bg-slate-200 hover:bg-cyan-600/60 ${open.speciality?"rounded-none":"rounded-tl-md rounded-tr-md"}`}>
        <h3 className=" mb-2  rounded-tl-sm rounded-tr-sm p-2">Language</h3>
        {!open.lang ?<FontAwesomeIcon onClick={()=>handleClick({lang:!open.lang})} className=" p-2" icon={faAngleDown} />
          :<FontAwesomeIcon onClick={()=>handleClick({lang:!open.lang})} className=" p-2" icon={faAngleUp} />}
          </div>
          {open.lang? 
          <div className=" w-full min-h-40 max-h-52 pl-3 overflow-y-scroll border-l-[0.5px] border-gray-200 border-r-[0.5px] customscrollBarscrollBar">

            {language.map((language, index) => {
              return (
                <label key={index} className="flex items-center mb-2 text-sm">
                  <input
                    type="checkbox"
                    checked={state.lang[index] || ""}
                    name="lang"
                    value={language}
                    onChange={(e) => handleFilterChange(e,index)}
                    className="mr-2 "
                  />
                  {language}
                </label>
              )
            })} 
          </div>:<></>}

        <div >
        <div className={`flex  justify-between items-center  bg-slate-200 hover:bg-cyan-600/60 ${open.lang?"rounded-none":"rounded-tl-md rounded-tr-md "}`}>
        <h3 className=" mb-2   p-2">Gender</h3>
        {!open.gender ?<FontAwesomeIcon onClick={()=>handleClick({gender:!open.gender})} className=" p-2" icon={faAngleDown} />
          :<FontAwesomeIcon onClick={()=>handleClick({gender:!open.gender})} className=" p-2" icon={faAngleUp} />}
          </div>
          {open.gender? 
          <div className=" w-full max-h-52 pl-3 overflow-y-scroll border-l-[0.5px] border-b-[0.5px] rounded-b-md border-gray-200 border-r-[0.5px] customscrollBarscrollBar">
            {Gender.map((gen, index) => {
              return (
                <label key={index} className="flex items-center mb-2 text-sm">
                  <input
                    type="checkbox"
                    checked={state.gender[index] || ""}
                    value={gen}
                    name="gender"
                    onChange={(e) => handleFilterChange(e,index)}
                    className="mr-2 "
                  />
                  {gen}
                </label>
              )
            })}
          </div>:<></>}
          <div className="flex justify-start items-center gap-x-2 mt-4 ">
            <button onClick={(e)=>handleClear(e)} className={`w-fit px-1.5 py-2 border border-gray-800 text-xs text-black bg-gray-300 hover:bg-gray-200 rounded-md ${isFIlter ? "bg-yellow-300/60 ":"bg-gray-300"}`}>CLEAR FILTER</button>
            <button onClick={(e)=>applyFIlter(e)} className="w-fit px-6 py-2 border border-gray-800 font-semibold text-xs text-white bg-cyan-600/75 hover:bg-cyan-600/60 rounded-md ">APPLY</button>
          </div>
        </div>
        </div>

    
      {/* Appointment Section (75%) */}


      { !doctorInfo ?
     <SkelitonLoader></SkelitonLoader>:

      <div className=" relative flex flex-col w-3/4 p-6 mb-6 ">
        <div>
        <h2 className="text-xl font-bold mb-4 ml-4">{`Docrors in ${filters.city && isFIlter ?filters.city  :"India"}`}</h2>
        {/* Doctor Cards */}
        {doctorInfo.length>0 ? doctorInfo.map((doctor) => (
          <div
            key={doctor._id}
            className="flex h-auto items-center w-full bg-sky-50/25 p-4 border-cyan-600 border-2 rounded-lg shadow-md mb-4"
          >
            <div className="flex w-3/5 h-auto gap-4">


              <img className="w-1/4 h-40  p-4  md:w-48" src={doctor.doctor_image} alt="doctor image" />
              <div className="w-3/4 flex flex-col h-auto  overflow-hidden pb-6 border-r-2 border-gray-400 ">

                <div className="flex flex-col gap-y-1 mb-2  ">
                  <h3 className="text-lg font-semibold">{doctor.doctor_name}</h3>
                  <p className="text-sm bg-cyan-100/45 text-black rounded-md px-1.5 py-0.5 font-semibold w-fit ">{`${doctor.experience_in_years} years of experience in ${doctor.speciality}`}</p>
                  <p className="text-sm text-slate-950/80">{doctor.degree}</p>


                </div>
                <div className="flex gap-x-2 justify-start items-center">
                <FontAwesomeIcon className="text-xs" icon={faLocationDot} style={{color: "#9af3f9",}} /><span className="text-sm">{doctor.city}</span>
                </div>
                <div className="flex gap-2 ">

                  <label className="text-sm py-0.5 pr-1.5">
                    Language:

                  </label>
                  <p>
                    {doctor.language_speaks.map((each,index) => {
                      return (<span key={index} className="mr-1 rounded-md bg-gray-200/80 text-xs py-0.5 px-1.5">{`${each}`}</span>)
                    })}
                  </p>

                </div>
                <Markdown className="text-sm text-black/90 max-w-72 h-full max-h-32 line-clamp-6 text-ellipsis overflow-hidden  text-wrap">
                  {doctor.experience}

                </Markdown>

              </div>

            </div>
            <div className="w-3/5 flex justify-center">

              <button className="bg-orange-400/80  text-white px-8 py-2 rounded-lg hover:bg-orange-400/90">
                Book Appointment
              </button>

            </div>
          </div>
        )):<p>No data found</p>}
      

        </div>

      

      

        

        { doctorInfo?.length>0 ? <div className="flex w-full justify-center pb-6 gap-2">
      <div className="flex items-center justify-center gap-2 caret-transparent ">
      <div onClick={(e)=>Number(currentPage) >1 ? upDatePage(e,Number(currentPage)-1): ()=>{}} className="rounded-md py-3 px-4 place-content-center text-sm border border-white ring-2 ring-slate-200 text-black bg-cyan-500/45 hover:bg-cyan-500/25 hover:cursor-pointer  ">Previous</div>
      {Number(currentPage)-3 >1 ?
     <div className={`rounded-md py-3  border border-white ring-2 place-content-center bg-cyan-500/45 hover:bg-cyan-500/25 ring-slate-200 hover:cursor-pointer px-4  `}><span className="text-black text-center  ">{"...."}</span></div>   
    
    :<></>}
      {pagination.length>0 ?pagination.map((each)=>{
      return(
        
       
       <div className={`rounded-md py-3  border border-white ring-2 text-base  hover:bg-cyan-500/25 ring-slate-200 hover:cursor-pointer px-4 place-content-center  ${currentPage==each ? "bg-yellow-300/75":"bg-cyan-500/45"} `} onClick={(e)=>{upDatePage(e,each)}}><span className="text-black ">{each}</span></div>
      )}):<></>}
      {Number(currentPage)+2 <totalPages ?
     <div className={`rounded-md py-3  border border-white ring-2 place-content-center bg-cyan-500/45 hover:bg-cyan-500/25 ring-slate-200 hover:cursor-pointer px-4  `}><span className="text-black text-center  ">{"...."}</span></div>   
    
    :<></>}
      <div onClick={(e)=>Number(currentPage) <totalPages ? upDatePage(e,Number(currentPage)+Number(1)): ()=>{}} className="rounded-md py-3 px-4 place-content-center text-sm border border-white ring-2 ring-slate-200 text-black bg-cyan-500/45 hover:bg-cyan-500/25 hover:cursor-pointer  ">Next</div>
      </div>
      </div>:<></>}
        
      </div> 

}

           

    </div>
  );
};

export default App;










