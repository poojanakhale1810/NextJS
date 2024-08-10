"use client"
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>about page
    <br/>

    <Link href='/about/aboutcollage'>About Collage</Link>
    <br/>

    <Link href='/about/aboutstudent'>About Student</Link>


    </div>

  )
}
