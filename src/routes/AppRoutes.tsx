import {
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import SettingsRoutes from './SettingsRoutes';
import CommunityRoutes from './CommunityRoutes';
import MyPageRoutes from './MyPageRoutes';
import ComplexRoutes from './ComplexRoutes';
import ComplexInfo from '../pages/Complex/ComplexInfo';
import { LoginPage } from '../pages/Login/LoginPage';
import { RegisterPage } from '../pages/Register/RegisterPage';
import { RegisterSuccessPage } from '../pages/Register/RegisterSuccessPage';
import FindAccount from '../pages/FindAccount/FindAccount';
import ShowEmail from '../pages/ShowEmail/ShowEmail';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import { BoardList } from '../pages/Board/BoardList';
import { BoardDetail } from '../pages/Board/BoardDetail';
import { BoardWrite } from '../pages/Board/BoardWrite';
import MyPage from '../pages/MyPage/MyPage';
import PostsPage from '../pages/MyPage/PostsPage';
import ScrapsPage from '../pages/MyPage/ScrapsPage';
import ChatsPage from '../pages/MyPage/ChatsPage';
import VehiclesPage from '../pages/MyPage/VehiclesPage';
import Settings from '../pages/Settings/Settings';
import Withdrawal from '../pages/Settings/Withdrawal/Withdrawal';
import Profile from '../pages/Settings/Profile/Profile';
import Header from '../layouts/Header';
import { ChatList } from '../pages/Chat/ChatList';
import ChatRoom from '../pages/Chat/ChatRoom';
import Facilities from '../pages/Facilities/Facilities';
import Favorites from '../pages/Favorites/Favorites';
import MyReservations from '../pages/MyReservations/MyReservations';
import Notices from '../pages/Notices/Notices';
import VisitorCar from '../pages/VisitorCar/VisitorCar';
import RegisterComplex from '../pages/Complex/RegisterComplex';
import SearchPage from '../pages/Search/SearchPage';
import HomePage from '../pages/Home/HomePage';
import OAuthRedirect from '../pages/OAuth/OAuthRedirect';

const ChatPage = () => (
  <>
    <Header title="채팅" type="sub" hasBackButton={true} />
    <ChatList />
  </>
);

const FacilitiesPage = () => (
  <>
    <Header title="시설정보" type="sub" hasBackButton={true} />
    <Facilities />
  </>
);

const FavoritesPage = () => (
  <>
    <Header title="즐겨찾기" type="sub" hasBackButton={true} />
    <Favorites />
  </>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        {/* OAuth 콜백 라우트 */}
        <Route path="/oauth/redirect" element={<OAuthRedirect />} />

        {/* 인증 관련 라우트 */}
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-success" element={<RegisterSuccessPage />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/show-email" element={<ShowEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* 메인 라우트 */}
        <Route element={<MainRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chatroom/:roomId" element={<ChatRoom />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/visitor-car" element={<VisitorCar />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>

        {/* 커뮤니티 라우트 */}
        <Route element={<CommunityRoutes />}>
          <Route path="/community" element={<BoardList />} />
          <Route path="/community/feed/:feedId" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />
        </Route>

        {/* 마이페이지 라우트 */}
        <Route element={<MyPageRoutes />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/posts" element={<PostsPage />} />
          <Route path="/mypage/scraps" element={<ScrapsPage />} />
          <Route path="/mypage/chats" element={<ChatsPage />} />
          <Route path="/mypage/vehicles" element={<VehiclesPage />} />
        </Route>

        {/* 설정 라우트 */}
        <Route element={<SettingsRoutes />}>
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/withdrawal" element={<Withdrawal />} />
          <Route path="/settings/profile" element={<Profile />} />
        </Route>

        {/* 단지 라우트 */}
        <Route element={<ComplexRoutes />}>
          <Route path="/complex-info" element={<ComplexInfo />} />
          <Route path="/register-complex" element={<RegisterComplex />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
