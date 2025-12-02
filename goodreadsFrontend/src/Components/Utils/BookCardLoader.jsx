import React from "react"
import ContentLoader from "react-content-loader"

const BookCardLoader = (props) => (
  <ContentLoader 
    speed={0.9}
    width={900}
    height={200}
    viewBox="0 0 900 200"
    backgroundColor="#f5f5f5"
    foregroundColor="#a0a6a3"
    {...props}
  >
    <rect x="165" y="59" rx="3" ry="3" width="88" height="6" /> 
    <rect x="165" y="77" rx="3" ry="3" width="52" height="6" /> 
    <rect x="165" y="144" rx="3" ry="3" width="410" height="6" /> 
    <rect x="165" y="165" rx="3" ry="3" width="380" height="6" /> 
    <rect x="164" y="183" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="176" cy="120" r="13" /> 
    <rect x="3" y="47" rx="0" ry="0" width="135" height="147" /> 
    <rect x="123" y="90" rx="0" ry="0" width="9" height="20" />
  </ContentLoader>
)

export default BookCardLoader

