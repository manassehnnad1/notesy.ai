/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Assets for the app
 */

import { logo, pager } from "@/assets/";



const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-semibold text-lg ">
      <img src={ logo}
      alt="notecloud"
      className="w-7 h-7" /><span className="font-special"> notesy.ai</span>
     
    </div>
  )
}

export default Logo;