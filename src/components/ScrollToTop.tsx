import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component này tự động cuộn trang lên đầu khi URL thay đổi
 * Sử dụng useLayoutEffect để đảm bảo cuộn xảy ra trước khi browser vẽ lại UI
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    // Cuộn lên đầu trang khi URL thay đổi
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Ngay lập tức, không có hiệu ứng (tránh nhìn thấy cuộn)
    });
  }, [pathname]);
  
  return null; // Component này không render ra UI
};

export default ScrollToTop; 