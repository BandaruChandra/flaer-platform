import Link from 'next/link';
import {
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';

function Footer() {
  return (
    <section className='px-[5vw] border-t border-bGray2'>
      <div className='flex justify-start flex-wrap gap-4 font-normal pt-4 lg:pt-10'>
        <div className='min-w-fit'>
          <Link
            target='_blank'
            className='min-w-fit'
            href={'/terms_and_conditions'}
          >
            <div className='text-gray2 max-w-fit hover:text-darkBlue text-sm flex items-center gap-2 hover:font-medium transition-all duration-300 font-normal'>
              <p>Terms & Conditions</p>

              <p className=''>
                <LuExternalLink />
              </p>
            </div>
          </Link>
        </div>

        <div className='min-w-fit'>
          <Link target='_blank' className='min-w-fit' href={'/privacy_policy'}>
            <div className='text-gray2 max-w-fit hover:text-darkBlue text-sm flex items-center gap-2 hover:font-medium transition-all duration-300 font-normal'>
              <p>Privacy Policy</p>
              <p className=''>
                <LuExternalLink />
              </p>{' '}
            </div>
          </Link>
        </div>

        <div className='min-w-fit'>
          <Link target='_blank' className='min-w-fit' href={'/return_refund'}>
            <div className='text-gray2 max-w-fit hover:text-darkBlue text-sm flex items-center gap-2 hover:font-medium transition-all duration-300 font-normal'>
              <p>Return & Refund</p>
              <p className=''>
                <LuExternalLink />
              </p>{' '}
            </div>
          </Link>
        </div>
      </div>

      <section className=''>
        <div className='lg:flex items-center justify-between lg:mt-10 mr-[5vw] py-8'>
          <p className='text-lg text-pGray'>
            Flaer Homes © Copyright 2024, Inc. All rights reserved
          </p>

          <div className='flex gap-6 mt-6'>
            <div className=' hover:text-darkBlue hover:scale-125 duration-300 transition-all '>
              <Link
                href={`https://www.linkedin.com/company/flaer-homes/`}
                target='_blank'
              >
                <p>
                  <FaLinkedin size={24} />
                </p>
              </Link>
            </div>
            <p className=''>
              <FaInstagram size={24} />
            </p>
            <p className=''>
              <FaTwitter size={24} />
            </p>
            <p className=''>
              <FaPinterest size={24} />
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
