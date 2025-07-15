import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import FilterPanel from '../components/job-listing/FilterPanel'
import JobCard from '../components/job-listing/JobCard'
import api from '../services/api'

const JobListing = ({ isLoggedIn, onLogout, currentUser }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilters, setActiveFilters] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  // Extract search query from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const searchFromUrl = queryParams.get('search')
    
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl)
    }
  }, [location.search])

  useEffect(() => {
    fetchJobs()
  }, [activeFilters, searchQuery])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      
      // Build query params for filtering
      const queryParams = new URLSearchParams()
      
      if (activeFilters.showOpenOnly) {
        queryParams.append('showOpenOnly', 'true')
      }
      
      if (activeFilters.opportunityType?.length > 0) {
        activeFilters.opportunityType.forEach(type => {
          queryParams.append('opportunityType', type)
        })
      }
      
      if (activeFilters.locations) {
        queryParams.append('locations', activeFilters.locations)
      }
      
      if (activeFilters.industry) {
        queryParams.append('industry', activeFilters.industry)
      }
      
      if (activeFilters.workplaceType?.length > 0) {
        activeFilters.workplaceType.forEach(type => {
          queryParams.append('workplaceType', type)
        })
      }
      
      if (searchQuery) {
        queryParams.append('search', searchQuery)
      }
      
      const response = await api.get(`/jobs?${queryParams.toString()}`)
      
      // Sort jobs by posted date (newest first)
      const sortedJobs = response.data.sort((a, b) => {
        return new Date(b.postedAt) - new Date(a.postedAt)
      })
      
      setJobs(sortedJobs)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setLoading(false)
      setJobs([])
    }
  }

  const handleFilterChange = (filters) => {
    setActiveFilters(filters)
  }
  
  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handlePostJob = () => {
    if (isLoggedIn) {
      navigate('/post-job')
    } else {
      navigate('/login')
    }
  }

  // Count active filters (for display)
  const countActiveFilters = () => {
    let count = 0;
    if (activeFilters.opportunityType?.length > 0) count += 1;
    if (activeFilters.workplaceType?.length > 0) count += 1;
    if (activeFilters.locations) count += 1;
    if (activeFilters.industry) count += 1;
    if (activeFilters.showOpenOnly) count += 1;
    return count;
  }

  // Fake jobs to display if no jobs are found
  const fakeJobs = [
    {
      id: 'fake1',
      title: 'Frontend Developer Intern',
      companyName: 'TechNova Solutions',
      locations: 'Bangalore',
      workplaceType: 'On-site',
      opportunityType: 'Internship',
      salary: { currency: '₹', type: 'per month', minAmount: 15000, maxAmount: 20000 },
      postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      isOpen: true,
      applicationLink: '#',
    },
    {
      id: 'fake2',
      title: 'Backend Engineer',
      companyName: 'FinEdge Bank',
      locations: 'Mumbai',
      workplaceType: 'Hybrid',
      opportunityType: 'Full Time',
      salary: { currency: '₹', type: 'per annum', minAmount: 600000, maxAmount: 900000 },
      postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      isOpen: true,
      applicationLink: '#',
    },
    {
      id: 'fake3',
      title: 'Marketing Associate',
      companyName: 'EduSpark',
      locations: 'Delhi',
      workplaceType: 'Remote',
      opportunityType: 'Part Time',
      salary: { currency: '₹', type: 'per month', minAmount: 10000, maxAmount: 15000 },
      postedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      isOpen: true,
      applicationLink: '#',
    },
    {
      id: 'fake4',
      title: 'Data Analyst',
      companyName: 'HealthFirst Analytics',
      locations: 'Hyderabad',
      workplaceType: 'On-site',
      opportunityType: 'Full Time',
      salary: { currency: '₹', type: 'per annum', minAmount: 500000, maxAmount: 700000 },
      postedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      isOpen: true,
      applicationLink: '#',
    },
  ];

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout} currentUser={currentUser}>
      <div className="container mx-auto py-6 bg-gray-50">
        {/* Post Job Button Section */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Job Opportunities</h1>
              <p className="text-gray-600 mt-1">Find and post job opportunities in the GLB community</p>
            </div>
            <button
              onClick={handlePostJob}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              {isLoggedIn ? 'Post a Job' : 'Login to Post'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel 
              onFilterChange={handleFilterChange} 
              activeFilters={activeFilters}
            />
          </div>
          
          {/* Job listings */}
          <div className="lg:col-span-3">
            <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h2 className="text-xl font-medium text-gray-800">
                  Showing {jobs.length} opportunities
                  {countActiveFilters() > 0 && (
                    <span className="ml-2 text-sm bg-blue-600 text-white px-2 py-1 rounded-full">
                      {countActiveFilters()} active filters
                    </span>
                  )}
                </h2>
                
                {searchQuery && (
                  <div className="mt-2 md:mt-0 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <span>Search: {searchQuery}</span>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-2 hover:text-blue-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div>
                {(jobs.length > 0 ? jobs : fakeJobs).map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default JobListing 