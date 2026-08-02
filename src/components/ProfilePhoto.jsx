import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import profileImage from '@/assets/profile.jpg'

// Clickable profile photo placeholder in the hero. Uploading stores a resized
// copy in this browser's localStorage (see useLocalImage for the caveat that
// this is a local preview, not a real upload — nothing is sent anywhere).
export default function ProfilePhoto({ initials = 'VF' }) {
  return (
    <div className="profile-photo">
        <Avatar className="h-48 w-48 border border-border">
          {profileImage && <AvatarImage src={profileImage} alt="Vincentius Arnold Fridolin" />}
          <AvatarFallback className="font-display text-2xl">{initials}</AvatarFallback>
        </Avatar>
    </div>
  )
}
