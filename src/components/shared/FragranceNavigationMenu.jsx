"use client"
import Link from 'next/link'
import React from 'react'

const FragranceNavigationMenu = () => {
  const navlinks = [
    {
      name: "News",
      link: "/news" 
    },
    {
      name: "New & Hot",
      link: "/New&Hot" 
    },
    {
      name: "Men",
      link: "/Men" 
    },
    {
      name: "Women",
      link: "/women" 
    },
    {
      name: "Brands",
      link: "/news" 
    },
    {
      name: "Collections",
      link: "/collection" 
    },
  ]
  return (
    <div className='flex items-center gap-[3rem] text-sm'>   
      {
        navlinks.map((item , idx) => (
          <Link href={item.link} className='flex items-center gap-1 hover:border-b ' key={idx}>{item.name}{
            item.name === "New & Hot" ? <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" title="New &amp; Featured" width="12" height="17" color="currentColor" stroke-width="0.9375"><title>New &amp; Featured</title><path fill-rule="evenodd" clip-rule="evenodd" d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z" fill="#FE9000"></path></svg> : ""
          }</Link>
        ))
      }
    </div>
  )
}

export default FragranceNavigationMenu
