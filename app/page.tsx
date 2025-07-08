"use client";
import { Button } from "@/components/ui/button";
import PapersTable from "@/custom_components/PapersTables";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";


interface Paper {
  id: number | string;
  school: string;
  subject: string;
  courseCode: string;
  year: string;
  semester: string;
}

export default function Home() {

  const router = useRouter()
  const [recentPapers, setRecentPapers] = useState<Paper[]>([]) 

  // const singlePaper: Paper = {
  //   id: 1,
  //   school: "CCNY",
  //   year: "2025",
  //   semester: "spring",
  //   subject: "physics",
  //   courseCode: "phy20800",
  // }



  // const recentPapers: Paper[] = [singlePaper]

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1)
    );
  }

  function navigateTo(link: string) {
    router.push(link)
  }

async function getLatestExams() {
  const { data, error } = await supabase
    .from('exam')
    .select('id, school, subject, courseCode, year, semester')
    .limit(10)
    .order('created_at', { ascending: false });

  if (data && !error) {
  
    setRecentPapers(data as Paper[]);
    console.log(data);
  }
}


  useEffect(()=>{
    // fetch the most recent exam entries in the database
    getLatestExams()
    .then(()=>{
      console.log("Function ran")
    })
  

  }, [])

  return (
    <div className="">
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Find Past Exams
        <br />
        Upload Yours
        <br />
        Let's Help Each Other
        <br />
        <span className="text-blue-700">Succeed!</span>
      </header>

      <div className="w-2/5 m-auto flex flex-row justify-center mt-14">
        <Button
          className="w-44 h-13 text-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all mx-2"
          onClick={() => navigateTo("/upload-paper")}
        >
          Upload a Paper
        </Button>
        <Button
          className="w-44 h-13 text-lg bg-white text-blue-700 border-blue-600 border-2 hover:border-blue-700 hover:bg-white hover:shadow-lg transition-all mx-2"
        >
          Browse Papers
        </Button>
      </div>

      <div className="max-w-4xl mx-auto mt-14">
        <PapersTable papers={recentPapers} title="Recent Papers"></PapersTable>
      </div>


    </div>
  );
}
