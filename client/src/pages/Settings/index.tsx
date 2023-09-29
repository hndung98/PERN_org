import React, { useEffect } from 'react'
import { useParams, useSearchParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

export default function SettingsPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(searchParams.toString());
    // console.log(params);
  }, [searchParams, params]);
  return (
    <>
    <div id="sidebar">
      {/* other elements */}
      <h1>Setting page</h1>

      <nav>
        <ul>
          <li>
            <Link to={`contacts/1?name=ss`}>Your Name</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Your Friend</Link>
          </li>
          <li>
            <Button onClick={() => {navigate('/contacts/3?name=ss')}}>Test</Button>
          </li>
        </ul>
      </nav>

      {/* other elements */}
    </div>
    </>
  )
}
