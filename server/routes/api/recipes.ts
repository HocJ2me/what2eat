// server/api/recipes.ts
import type { Recipe } from '~/types'

// Danh sách món ăn Việt Nam phong phú
const vietnameseRecipes: Recipe[] = [
  {
    id: 'pho-bo',
    name: 'Phở bò',
    description: 'Món phở bò truyền thống với nước dùng trong và thơm ngon',
    source_path: 'pho-bo.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['phở', 'bò', 'truyền thống'],
    servings: 4,
    ingredients: [
      { name: 'Bánh phở', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Thịt bò', quantity: 300, unit: 'g', text_quantity: '300g', notes: 'Thịt bò tái' },
      { name: 'Xương bò', quantity: 1, unit: 'kg', text_quantity: '1kg', notes: 'Để nấu nước dùng' },
      { name: 'Hành tây', quantity: 2, unit: 'củ', text_quantity: '2 củ', notes: '' },
      { name: 'Gừng', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Quế', quantity: 2, unit: 'thanh', text_quantity: '2 thanh', notes: '' },
      { name: 'Hoa hồi', quantity: 3, unit: 'cánh', text_quantity: '3 cánh', notes: '' },
      { name: 'Thảo quả', quantity: 3, unit: 'quả', text_quantity: '3 quả', notes: '' },
      { name: 'Hành lá', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Rau thơm', quantity: 50, unit: 'g', text_quantity: '50g', notes: 'Ngò gai, húng quế' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch xương bò, luộc sơ qua để loại bỏ tạp chất' },
      { step: 2, description: 'Nướng hành tây và gừng cho thơm' },
      { step: 3, description: 'Nấu nước dùng với xương bò và các gia vị trong 3-4 giờ' },
      { step: 4, description: 'Thái thịt bò mỏng, trần qua nước sôi' },
      { step: 5, description: 'Luộc bánh phở, xếp vào tô cùng thịt bò' },
      { step: 6, description: 'Rưới nước dùng nóng, trang trí với hành lá và rau thơm' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 240,
    total_time_minutes: 270,
    additional_notes: ['Có thể thêm chanh, tương ớt, nước mắm']
  },
  {
    id: 'bun-cha',
    name: 'Bún chả',
    description: 'Món bún chả Hà Nội với thịt nướng thơm ngon',
    source_path: 'bun-cha.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['bún', 'chả', 'nướng'],
    servings: 4,
    ingredients: [
      { name: 'Bún tươi', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Thịt ba chỉ', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Thịt nạc vai', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Nước mắm', quantity: 100, unit: 'ml', text_quantity: '100ml', notes: '' },
      { name: 'Đường', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Tỏi', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' },
      { name: 'Hành tím', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Rau sống', quantity: 200, unit: 'g', text_quantity: '200g', notes: 'Xà lách, húng quế' }
    ],
    steps: [
      { step: 1, description: 'Thái thịt thành miếng nhỏ, ướp với gia vị' },
      { step: 2, description: 'Nướng thịt trên than hoa hoặc chảo' },
      { step: 3, description: 'Pha nước chấm với nước mắm, đường, tỏi, ớt' },
      { step: 4, description: 'Luộc bún, để ráo nước' },
      { step: 5, description: 'Xếp bún vào tô, thêm thịt nướng và rau sống' },
      { step: 6, description: 'Rưới nước chấm và thưởng thức' }
    ],
    prep_time_minutes: 45,
    cook_time_minutes: 30,
    total_time_minutes: 75,
    additional_notes: ['Nên ăn ngay khi thịt còn nóng']
  },
  {
    id: 'banh-mi',
    name: 'Bánh mì',
    description: 'Bánh mì Việt Nam với pate và thịt nướng',
    source_path: 'banh-mi.md',
    image_path: null,
    category: 'Món ăn nhanh',
    difficulty: 1,
    tags: ['bánh mì', 'pate', 'thịt'],
    servings: 4,
    ingredients: [
      { name: 'Bánh mì', quantity: 4, unit: 'cái', text_quantity: '4 cái', notes: '' },
      { name: 'Pate', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Thịt nướng', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Dưa chuột', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Cà rốt', quantity: 1, unit: 'củ', text_quantity: '1 củ', notes: '' },
      { name: 'Hành tây', quantity: 1, unit: 'củ', text_quantity: '1 củ', notes: '' },
      { name: 'Ngò', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Tương ớt', quantity: 30, unit: 'ml', text_quantity: '30ml', notes: '' },
      { name: 'Nước mắm', quantity: 20, unit: 'ml', text_quantity: '20ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Nướng bánh mì cho giòn' },
      { step: 2, description: 'Thái dưa chuột, cà rốt thành sợi' },
      { step: 3, description: 'Ngâm rau củ với nước mắm pha loãng' },
      { step: 4, description: 'Phết pate lên bánh mì' },
      { step: 5, description: 'Xếp thịt nướng và rau củ vào bánh mì' },
      { step: 6, description: 'Thêm tương ớt và ngò, thưởng thức' }
    ],
    prep_time_minutes: 20,
    cook_time_minutes: 10,
    total_time_minutes: 30,
    additional_notes: ['Có thể thêm chả cá hoặc chả lụa']
  },
  {
    id: 'goi-cuon',
    name: 'Gỏi cuốn',
    description: 'Gỏi cuốn tôm thịt với bánh tráng tươi',
    source_path: 'goi-cuon.md',
    image_path: null,
    category: 'Khai vị',
    difficulty: 2,
    tags: ['gỏi cuốn', 'tôm', 'thịt'],
    servings: 6,
    ingredients: [
      { name: 'Bánh tráng', quantity: 20, unit: 'lá', text_quantity: '20 lá', notes: '' },
      { name: 'Tôm', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Thịt ba chỉ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Bún tươi', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Rau xà lách', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Húng quế', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Dưa chuột', quantity: 1, unit: 'quả', text_quantity: '1 quả', notes: '' },
      { name: 'Nước mắm', quantity: 100, unit: 'ml', text_quantity: '100ml', notes: '' },
      { name: 'Đường', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Luộc tôm và thịt, để nguội' },
      { step: 2, description: 'Thái tôm và thịt thành miếng nhỏ' },
      { step: 3, description: 'Rửa sạch các loại rau' },
      { step: 4, description: 'Ngâm bánh tráng trong nước ấm' },
      { step: 5, description: 'Cuốn các nguyên liệu vào bánh tráng' },
      { step: 6, description: 'Pha nước chấm và thưởng thức' }
    ],
    prep_time_minutes: 40,
    cook_time_minutes: 15,
    total_time_minutes: 55,
    additional_notes: ['Cuốn chặt tay để không bị bung']
  },
  {
    id: 'ca-kho-to',
    name: 'Cá kho tộ',
    description: 'Cá kho tộ truyền thống với nước dừa',
    source_path: 'ca-kho-to.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['cá', 'kho', 'nước dừa'],
    servings: 4,
    ingredients: [
      { name: 'Cá tra', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Nước dừa', quantity: 200, unit: 'ml', text_quantity: '200ml', notes: '' },
      { name: 'Nước mắm', quantity: 80, unit: 'ml', text_quantity: '80ml', notes: '' },
      { name: 'Đường', quantity: 60, unit: 'g', text_quantity: '60g', notes: '' },
      { name: 'Tỏi', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Ớt', quantity: 10, unit: 'g', text_quantity: '10g', notes: '' },
      { name: 'Hành tím', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Tiêu', quantity: 5, unit: 'g', text_quantity: '5g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch cá, cắt khúc vừa ăn' },
      { step: 2, description: 'Ướp cá với nước mắm, đường, tỏi, ớt' },
      { step: 3, description: 'Để cá ngấm gia vị trong 30 phút' },
      { step: 4, description: 'Cho cá vào nồi đất, thêm nước dừa' },
      { step: 5, description: 'Kho với lửa nhỏ trong 45 phút' },
      { step: 6, description: 'Thêm hành tím và tiêu, kho thêm 10 phút' }
    ],
    prep_time_minutes: 40,
    cook_time_minutes: 55,
    total_time_minutes: 95,
    additional_notes: ['Nên dùng nồi đất để kho']
  },
  {
    id: 'thit-kho-trung',
    name: 'Thịt kho trứng',
    description: 'Thịt ba chỉ kho với trứng vịt',
    source_path: 'thit-kho-trung.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['thịt', 'trứng', 'kho'],
    servings: 4,
    ingredients: [
      { name: 'Thịt ba chỉ', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Trứng vịt', quantity: 6, unit: 'quả', text_quantity: '6 quả', notes: '' },
      { name: 'Nước dừa', quantity: 300, unit: 'ml', text_quantity: '300ml', notes: '' },
      { name: 'Nước mắm', quantity: 100, unit: 'ml', text_quantity: '100ml', notes: '' },
      { name: 'Đường', quantity: 80, unit: 'g', text_quantity: '80g', notes: '' },
      { name: 'Tỏi', quantity: 40, unit: 'g', text_quantity: '40g', notes: '' },
      { name: 'Hành tím', quantity: 60, unit: 'g', text_quantity: '60g', notes: '' },
      { name: 'Ớt', quantity: 15, unit: 'g', text_quantity: '15g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Thái thịt thành miếng vuông vừa ăn' },
      { step: 2, description: 'Luộc trứng, bóc vỏ' },
      { step: 3, description: 'Ướp thịt với nước mắm, đường, tỏi' },
      { step: 4, description: 'Chiên sơ thịt cho vàng' },
      { step: 5, description: 'Cho thịt và trứng vào nồi, thêm nước dừa' },
      { step: 6, description: 'Kho với lửa nhỏ trong 1 giờ' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 60,
    total_time_minutes: 90,
    additional_notes: ['Có thể thêm củ cải trắng']
  },
  {
    id: 'canh-chua-ca',
    name: 'Canh chua cá',
    description: 'Canh chua cá bông lau với cà chua',
    source_path: 'canh-chua-ca.md',
    image_path: null,
    category: 'Canh',
    difficulty: 2,
    tags: ['canh chua', 'cá', 'cà chua'],
    servings: 4,
    ingredients: [
      { name: 'Cá bông lau', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Cà chua', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Dứa', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Đậu bắp', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Giá đỗ', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Rau om', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Me', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Nước mắm', quantity: 40, unit: 'ml', text_quantity: '40ml', notes: '' },
      { name: 'Đường', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch cá, cắt khúc' },
      { step: 2, description: 'Thái cà chua, dứa thành miếng' },
      { step: 3, description: 'Nấu nước me để lấy vị chua' },
      { step: 4, description: 'Nấu nước dùng với cá' },
      { step: 5, description: 'Thêm cà chua, dứa, đậu bắp' },
      { step: 6, description: 'Nêm nếm gia vị, thêm giá đỗ và rau om' }
    ],
    prep_time_minutes: 25,
    cook_time_minutes: 20,
    total_time_minutes: 45,
    additional_notes: ['Có thể thêm bạc hà']
  },
  {
    id: 'com-tam',
    name: 'Cơm tấm',
    description: 'Cơm tấm sườn nướng với chả',
    source_path: 'com-tam.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['cơm tấm', 'sườn', 'chả'],
    servings: 4,
    ingredients: [
      { name: 'Gạo tấm', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Sườn heo', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Chả cá', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Trứng', quantity: 4, unit: 'quả', text_quantity: '4 quả', notes: '' },
      { name: 'Dưa chuột', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Cà chua', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Nước mắm', quantity: 60, unit: 'ml', text_quantity: '60ml', notes: '' },
      { name: 'Đường', quantity: 40, unit: 'g', text_quantity: '40g', notes: '' },
      { name: 'Tỏi', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Nấu cơm tấm với nước dừa' },
      { step: 2, description: 'Ướp sườn với gia vị' },
      { step: 3, description: 'Nướng sườn trên than hoa' },
      { step: 4, description: 'Chiên chả cá và trứng' },
      { step: 5, description: 'Thái dưa chuột, cà chua' },
      { step: 6, description: 'Xếp cơm với các món ăn kèm' }
    ],
    prep_time_minutes: 35,
    cook_time_minutes: 30,
    total_time_minutes: 65,
    additional_notes: ['Có thể thêm bì heo']
  },
  {
    id: 'banh-xeo',
    name: 'Bánh xèo',
    description: 'Bánh xèo giòn với tôm thịt',
    source_path: 'banh-xeo.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['bánh xèo', 'tôm', 'thịt'],
    servings: 4,
    ingredients: [
      { name: 'Bột gạo', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Bột nghệ', quantity: 10, unit: 'g', text_quantity: '10g', notes: '' },
      { name: 'Nước cốt dừa', quantity: 100, unit: 'ml', text_quantity: '100ml', notes: '' },
      { name: 'Tôm', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Thịt ba chỉ', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Giá đỗ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Dầu ăn', quantity: 50, unit: 'ml', text_quantity: '50ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Pha bột với nước cốt dừa và bột nghệ' },
      { step: 2, description: 'Thái tôm và thịt thành miếng nhỏ' },
      { step: 3, description: 'Đun nóng chảo, thêm dầu' },
      { step: 4, description: 'Đổ bột vào chảo, xoay đều' },
      { step: 5, description: 'Thêm tôm, thịt và giá đỗ' },
      { step: 6, description: 'Gập bánh lại và chiên vàng' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 25,
    total_time_minutes: 55,
    additional_notes: ['Nên ăn với rau sống và nước chấm']
  },
  {
    id: 'chao-long',
    name: 'Cháo lòng',
    description: 'Cháo lòng heo với ruột non',
    source_path: 'chao-long.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['cháo', 'lòng', 'ruột'],
    servings: 4,
    ingredients: [
      { name: 'Gạo tẻ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Lòng heo', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Ruột non', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Tiết heo', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Ngò', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Nước mắm', quantity: 40, unit: 'ml', text_quantity: '40ml', notes: '' },
      { name: 'Tiêu', quantity: 5, unit: 'g', text_quantity: '5g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch lòng và ruột non' },
      { step: 2, description: 'Luộc lòng với gừng để khử mùi' },
      { step: 3, description: 'Nấu cháo với gạo' },
      { step: 4, description: 'Thái lòng thành miếng nhỏ' },
      { step: 5, description: 'Thêm lòng vào cháo' },
      { step: 6, description: 'Nêm nếm gia vị, trang trí với hành ngò' }
    ],
    prep_time_minutes: 45,
    cook_time_minutes: 60,
    total_time_minutes: 105,
    additional_notes: ['Cần rửa lòng thật sạch']
  },
  {
    id: 'bun-bo-hue',
    name: 'Bún bò Huế',
    description: 'Bún bò Huế cay nồng với thịt bò',
    source_path: 'bun-bo-hue.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['bún bò', 'Huế', 'cay'],
    servings: 4,
    ingredients: [
      { name: 'Bún tươi', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Thịt bò', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Chân giò', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Sả', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Tỏi', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Ớt', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' },
      { name: 'Mắm ruốc', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Rau thơm', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch thịt bò và chân giò' },
      { step: 2, description: 'Nấu nước dùng với sả, tỏi, ớt' },
      { step: 3, description: 'Thêm mắm ruốc vào nước dùng' },
      { step: 4, description: 'Luộc thịt bò và chân giò' },
      { step: 5, description: 'Thái thịt thành miếng mỏng' },
      { step: 6, description: 'Xếp bún với thịt, rưới nước dùng' }
    ],
    prep_time_minutes: 40,
    cook_time_minutes: 90,
    total_time_minutes: 130,
    additional_notes: ['Có thể thêm chả cua']
  },
  {
    id: 'nem-nuong',
    name: 'Nem nướng',
    description: 'Nem nướng Nha Trang với bánh tráng',
    source_path: 'nem-nuong.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['nem', 'nướng', 'Nha Trang'],
    servings: 4,
    ingredients: [
      { name: 'Thịt heo', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Bánh tráng', quantity: 20, unit: 'lá', text_quantity: '20 lá', notes: '' },
      { name: 'Bún tươi', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Rau sống', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Dưa chuột', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Cà rốt', quantity: 1, unit: 'củ', text_quantity: '1 củ', notes: '' },
      { name: 'Nước mắm', quantity: 80, unit: 'ml', text_quantity: '80ml', notes: '' },
      { name: 'Đường', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Tỏi', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Xay thịt heo với gia vị' },
      { step: 2, description: 'Vo thịt thành viên tròn' },
      { step: 3, description: 'Nướng nem trên than hoa' },
      { step: 4, description: 'Thái dưa chuột, cà rốt thành sợi' },
      { step: 5, description: 'Pha nước chấm' },
      { step: 6, description: 'Cuốn nem với bánh tráng và rau' }
    ],
    prep_time_minutes: 35,
    cook_time_minutes: 25,
    total_time_minutes: 60,
    additional_notes: ['Nem nên nướng vừa chín']
  },
  {
    id: 'lau-ca-bong-lau',
    name: 'Lẩu cá bông lau',
    description: 'Lẩu cá bông lau với rau củ',
    source_path: 'lau-ca-bong-lau.md',
    image_path: null,
    category: 'Lẩu',
    difficulty: 2,
    tags: ['lẩu', 'cá', 'bông lau'],
    servings: 6,
    ingredients: [
      { name: 'Cá bông lau', quantity: 800, unit: 'g', text_quantity: '800g', notes: '' },
      { name: 'Cà chua', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Dứa', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Đậu bắp', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Giá đỗ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Rau muống', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Bạc hà', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Me', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Nước mắm', quantity: 60, unit: 'ml', text_quantity: '60ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch cá, cắt khúc' },
      { step: 2, description: 'Nấu nước dùng với cà chua, dứa' },
      { step: 3, description: 'Thêm me để có vị chua' },
      { step: 4, description: 'Nêm nếm gia vị' },
      { step: 5, description: 'Thêm cá vào nồi lẩu' },
      { step: 6, description: 'Chuẩn bị rau củ để nhúng lẩu' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 25,
    total_time_minutes: 55,
    additional_notes: ['Nên ăn với bún tươi']
  },
  {
    id: 'banh-cuon',
    name: 'Bánh cuốn',
    description: 'Bánh cuốn nhân thịt với nước chấm',
    source_path: 'banh-cuon.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['bánh cuốn', 'thịt', 'nhân'],
    servings: 4,
    ingredients: [
      { name: 'Bột gạo', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Thịt heo', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Mộc nhĩ', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Hành tím', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Nước mắm', quantity: 80, unit: 'ml', text_quantity: '80ml', notes: '' },
      { name: 'Đường', quantity: 40, unit: 'g', text_quantity: '40g', notes: '' },
      { name: 'Chanh', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Ớt', quantity: 10, unit: 'g', text_quantity: '10g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Pha bột gạo với nước' },
      { step: 2, description: 'Thái thịt và mộc nhĩ nhỏ' },
      { step: 3, description: 'Xào nhân với hành tím' },
      { step: 4, description: 'Tráng bánh trên chảo nóng' },
      { step: 5, description: 'Cuốn nhân vào bánh' },
      { step: 6, description: 'Pha nước chấm và thưởng thức' }
    ],
    prep_time_minutes: 45,
    cook_time_minutes: 30,
    total_time_minutes: 75,
    additional_notes: ['Cần có chảo chuyên dụng']
  },
  {
    id: 'chao-ga',
    name: 'Cháo gà',
    description: 'Cháo gà thơm ngon với thịt gà',
    source_path: 'chao-ga.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 1,
    tags: ['cháo', 'gà', 'thịt'],
    servings: 4,
    ingredients: [
      { name: 'Gạo tẻ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Thịt gà', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Ngò', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Nước mắm', quantity: 30, unit: 'ml', text_quantity: '30ml', notes: '' },
      { name: 'Tiêu', quantity: 5, unit: 'g', text_quantity: '5g', notes: '' },
      { name: 'Gừng', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch thịt gà' },
      { step: 2, description: 'Nấu cháo với gạo' },
      { step: 3, description: 'Luộc thịt gà với gừng' },
      { step: 4, description: 'Xé thịt gà thành sợi' },
      { step: 5, description: 'Thêm thịt gà vào cháo' },
      { step: 6, description: 'Nêm nếm gia vị, trang trí với hành ngò' }
    ],
    prep_time_minutes: 20,
    cook_time_minutes: 40,
    total_time_minutes: 60,
    additional_notes: ['Có thể thêm trứng gà']
  },
  {
    id: 'bun-rieu',
    name: 'Bún riêu',
    description: 'Bún riêu cua với cà chua',
    source_path: 'bun-rieu.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['bún riêu', 'cua', 'cà chua'],
    servings: 4,
    ingredients: [
      { name: 'Bún tươi', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Cua đồng', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Cà chua', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Đậu phụ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Mắm tôm', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Hành lá', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Rau thơm', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Nước mắm', quantity: 40, unit: 'ml', text_quantity: '40ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Giã cua lấy nước' },
      { step: 2, description: 'Lọc nước cua qua rây' },
      { step: 3, description: 'Nấu nước dùng với cà chua' },
      { step: 4, description: 'Thêm nước cua vào nồi' },
      { step: 5, description: 'Thêm đậu phụ và mắm tôm' },
      { step: 6, description: 'Xếp bún với nước dùng và rau' }
    ],
    prep_time_minutes: 50,
    cook_time_minutes: 40,
    total_time_minutes: 90,
    additional_notes: ['Cần giã cua thật kỹ']
  },
  {
    id: 'lau-thai',
    name: 'Lẩu Thái',
    description: 'Lẩu Thái cay với tôm và cá',
    source_path: 'lau-thai.md',
    image_path: null,
    category: 'Lẩu',
    difficulty: 2,
    tags: ['lẩu Thái', 'cay', 'tôm'],
    servings: 6,
    ingredients: [
      { name: 'Tôm', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Cá', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Nước cốt dừa', quantity: 400, unit: 'ml', text_quantity: '400ml', notes: '' },
      { name: 'Sả', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Ớt', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Chanh', quantity: 3, unit: 'quả', text_quantity: '3 quả', notes: '' },
      { name: 'Rau thơm', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Nấm', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Bún tươi', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch tôm và cá' },
      { step: 2, description: 'Nấu nước dùng với nước cốt dừa' },
      { step: 3, description: 'Thêm sả, ớt, chanh vào nồi' },
      { step: 4, description: 'Nêm nếm gia vị cho vừa miệng' },
      { step: 5, description: 'Thêm tôm, cá vào nồi lẩu' },
      { step: 6, description: 'Chuẩn bị rau và bún để nhúng' }
    ],
    prep_time_minutes: 25,
    cook_time_minutes: 20,
    total_time_minutes: 45,
    additional_notes: ['Có thể thêm sữa đặc']
  },
  {
    id: 'banh-mi-pate',
    name: 'Bánh mì pate',
    description: 'Bánh mì pate với thịt nướng',
    source_path: 'banh-mi-pate.md',
    image_path: null,
    category: 'Món ăn nhanh',
    difficulty: 1,
    tags: ['bánh mì', 'pate', 'thịt'],
    servings: 4,
    ingredients: [
      { name: 'Bánh mì', quantity: 4, unit: 'cái', text_quantity: '4 cái', notes: '' },
      { name: 'Pate', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Thịt nướng', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Dưa chuột', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Cà rốt', quantity: 1, unit: 'củ', text_quantity: '1 củ', notes: '' },
      { name: 'Ngò', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Tương ớt', quantity: 20, unit: 'ml', text_quantity: '20ml', notes: '' },
      { name: 'Nước mắm', quantity: 15, unit: 'ml', text_quantity: '15ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Nướng bánh mì cho giòn' },
      { step: 2, description: 'Thái dưa chuột, cà rốt thành sợi' },
      { step: 3, description: 'Ngâm rau củ với nước mắm' },
      { step: 4, description: 'Phết pate lên bánh mì' },
      { step: 5, description: 'Xếp thịt nướng và rau củ' },
      { step: 6, description: 'Thêm tương ớt và ngò' }
    ],
    prep_time_minutes: 15,
    cook_time_minutes: 10,
    total_time_minutes: 25,
    additional_notes: ['Có thể thêm chả cá']
  },
  {
    id: 'com-ga',
    name: 'Cơm gà',
    description: 'Cơm gà Hội An với thịt gà luộc',
    source_path: 'com-ga.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 2,
    tags: ['cơm gà', 'Hội An', 'luộc'],
    servings: 4,
    ingredients: [
      { name: 'Gạo', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Thịt gà', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Nghệ', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' },
      { name: 'Tỏi', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' },
      { name: 'Hành tím', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Rau răm', quantity: 50, unit: 'g', text_quantity: '50g', notes: '' },
      { name: 'Nước mắm', quantity: 60, unit: 'ml', text_quantity: '60ml', notes: '' },
      { name: 'Đường', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Luộc gà với gừng và muối' },
      { step: 2, description: 'Nấu cơm với nước luộc gà' },
      { step: 3, description: 'Thêm nghệ vào cơm' },
      { step: 4, description: 'Xé thịt gà thành sợi' },
      { step: 5, description: 'Pha nước chấm' },
      { step: 6, description: 'Xếp cơm với thịt gà và rau răm' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 45,
    total_time_minutes: 75,
    additional_notes: ['Có thể thêm chả cá']
  },
  {
    id: 'bun-mam',
    name: 'Bún mắm',
    description: 'Bún mắm cá với rau củ',
    source_path: 'bun-mam.md',
    image_path: null,
    category: 'Món chính',
    difficulty: 3,
    tags: ['bún mắm', 'cá', 'rau'],
    servings: 4,
    ingredients: [
      { name: 'Bún tươi', quantity: 500, unit: 'g', text_quantity: '500g', notes: '' },
      { name: 'Mắm cá', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Cá', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Tôm', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Cà tím', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Đậu bắp', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Rau muống', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Nước cốt dừa', quantity: 200, unit: 'ml', text_quantity: '200ml', notes: '' },
      { name: 'Đường', quantity: 40, unit: 'g', text_quantity: '40g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch cá và tôm' },
      { step: 2, description: 'Nấu nước dùng với mắm cá' },
      { step: 3, description: 'Thêm nước cốt dừa và đường' },
      { step: 4, description: 'Thêm cá, tôm vào nồi' },
      { step: 5, description: 'Thêm cà tím và đậu bắp' },
      { step: 6, description: 'Xếp bún với nước dùng và rau muống' }
    ],
    prep_time_minutes: 35,
    cook_time_minutes: 30,
    total_time_minutes: 65,
    additional_notes: ['Có thể thêm bạc hà']
  },
  {
    id: 'lau-de',
    name: 'Lẩu dê',
    description: 'Lẩu dê với rau củ tươi',
    source_path: 'lau-de.md',
    image_path: null,
    category: 'Lẩu',
    difficulty: 2,
    tags: ['lẩu dê', 'thịt dê', 'rau'],
    servings: 6,
    ingredients: [
      { name: 'Thịt dê', quantity: 600, unit: 'g', text_quantity: '600g', notes: '' },
      { name: 'Xương dê', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Cà chua', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Dứa', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Rau muống', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Bạc hà', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Nấm', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Nước mắm', quantity: 50, unit: 'ml', text_quantity: '50ml', notes: '' },
      { name: 'Đường', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Rửa sạch thịt và xương dê' },
      { step: 2, description: 'Nấu nước dùng với xương dê' },
      { step: 3, description: 'Thêm cà chua và dứa' },
      { step: 4, description: 'Nêm nếm gia vị' },
      { step: 5, description: 'Thêm thịt dê vào nồi lẩu' },
      { step: 6, description: 'Chuẩn bị rau củ để nhúng' }
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 25,
    total_time_minutes: 55,
    additional_notes: ['Nên ăn với bún tươi']
  },
  {
    id: 'banh-tet',
    name: 'Bánh tét',
    description: 'Bánh tét nhân đậu xanh và thịt',
    source_path: 'banh-tet.md',
    image_path: null,
    category: 'Bánh',
    difficulty: 4,
    tags: ['bánh tét', 'đậu xanh', 'thịt'],
    servings: 8,
    ingredients: [
      { name: 'Gạo nếp', quantity: 1000, unit: 'g', text_quantity: '1kg', notes: '' },
      { name: 'Đậu xanh', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Thịt ba chỉ', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Lá chuối', quantity: 20, unit: 'lá', text_quantity: '20 lá', notes: '' },
      { name: 'Dây lạt', quantity: 10, unit: 'sợi', text_quantity: '10 sợi', notes: '' },
      { name: 'Muối', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' },
      { name: 'Nước mắm', quantity: 40, unit: 'ml', text_quantity: '40ml', notes: '' },
      { name: 'Tiêu', quantity: 10, unit: 'g', text_quantity: '10g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Ngâm gạo nếp và đậu xanh' },
      { step: 2, description: 'Ướp thịt với gia vị' },
      { step: 3, description: 'Luộc đậu xanh và giã nhuyễn' },
      { step: 4, description: 'Gói bánh với lá chuối' },
      { step: 5, description: 'Luộc bánh trong 4-5 giờ' },
      { step: 6, description: 'Để nguội và thưởng thức' }
    ],
    prep_time_minutes: 120,
    cook_time_minutes: 300,
    total_time_minutes: 420,
    additional_notes: ['Cần gói chặt tay']
  },
  {
    id: 'banh-chung',
    name: 'Bánh chưng',
    description: 'Bánh chưng nhân đậu xanh và thịt',
    source_path: 'banh-chung.md',
    image_path: null,
    category: 'Bánh',
    difficulty: 4,
    tags: ['bánh chưng', 'đậu xanh', 'thịt'],
    servings: 8,
    ingredients: [
      { name: 'Gạo nếp', quantity: 1000, unit: 'g', text_quantity: '1kg', notes: '' },
      { name: 'Đậu xanh', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Thịt ba chỉ', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Lá dong', quantity: 20, unit: 'lá', text_quantity: '20 lá', notes: '' },
      { name: 'Dây lạt', quantity: 10, unit: 'sợi', text_quantity: '10 sợi', notes: '' },
      { name: 'Muối', quantity: 20, unit: 'g', text_quantity: '20g', notes: '' },
      { name: 'Nước mắm', quantity: 40, unit: 'ml', text_quantity: '40ml', notes: '' },
      { name: 'Tiêu', quantity: 10, unit: 'g', text_quantity: '10g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Ngâm gạo nếp và đậu xanh' },
      { step: 2, description: 'Ướp thịt với gia vị' },
      { step: 3, description: 'Luộc đậu xanh và giã nhuyễn' },
      { step: 4, description: 'Gói bánh với lá dong' },
      { step: 5, description: 'Luộc bánh trong 6-8 giờ' },
      { step: 6, description: 'Để nguội và thưởng thức' }
    ],
    prep_time_minutes: 120,
    cook_time_minutes: 480,
    total_time_minutes: 600,
    additional_notes: ['Cần gói chặt tay']
  },
  {
    id: 'che-ba-mau',
    name: 'Chè ba màu',
    description: 'Chè ba màu với đậu đỏ, đậu xanh và bánh lọt',
    source_path: 'che-ba-mau.md',
    image_path: null,
    category: 'Tráng miệng',
    difficulty: 2,
    tags: ['chè', 'ba màu', 'đậu'],
    servings: 6,
    ingredients: [
      { name: 'Đậu đỏ', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Đậu xanh', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Bánh lọt', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Nước cốt dừa', quantity: 300, unit: 'ml', text_quantity: '300ml', notes: '' },
      { name: 'Đường', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Muối', quantity: 5, unit: 'g', text_quantity: '5g', notes: '' },
      { name: 'Lá dứa', quantity: 10, unit: 'lá', text_quantity: '10 lá', notes: '' },
      { name: 'Đá bào', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Ngâm đậu đỏ và đậu xanh' },
      { step: 2, description: 'Nấu đậu đỏ với đường' },
      { step: 3, description: 'Nấu đậu xanh với lá dứa' },
      { step: 4, description: 'Nấu bánh lọt' },
      { step: 5, description: 'Pha nước cốt dừa với muối' },
      { step: 6, description: 'Xếp chè theo lớp và thêm đá' }
    ],
    prep_time_minutes: 40,
    cook_time_minutes: 60,
    total_time_minutes: 100,
    additional_notes: ['Có thể thêm thạch dừa']
  },
  {
    id: 'che-khoai-mon',
    name: 'Chè khoai môn',
    description: 'Chè khoai môn với nước cốt dừa',
    source_path: 'che-khoai-mon.md',
    image_path: null,
    category: 'Tráng miệng',
    difficulty: 1,
    tags: ['chè', 'khoai môn', 'dừa'],
    servings: 4,
    ingredients: [
      { name: 'Khoai môn', quantity: 400, unit: 'g', text_quantity: '400g', notes: '' },
      { name: 'Nước cốt dừa', quantity: 200, unit: 'ml', text_quantity: '200ml', notes: '' },
      { name: 'Đường', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' },
      { name: 'Muối', quantity: 3, unit: 'g', text_quantity: '3g', notes: '' },
      { name: 'Lá dứa', quantity: 5, unit: 'lá', text_quantity: '5 lá', notes: '' },
      { name: 'Đá bào', quantity: 100, unit: 'g', text_quantity: '100g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Gọt vỏ khoai môn, thái miếng' },
      { step: 2, description: 'Luộc khoai môn với lá dứa' },
      { step: 3, description: 'Thêm đường vào nồi khoai' },
      { step: 4, description: 'Nấu đến khi khoai mềm' },
      { step: 5, description: 'Pha nước cốt dừa với muối' },
      { step: 6, description: 'Rưới nước cốt dừa và thêm đá' }
    ],
    prep_time_minutes: 20,
    cook_time_minutes: 30,
    total_time_minutes: 50,
    additional_notes: ['Có thể thêm bánh lọt']
  },
  {
    id: 'banh-flan',
    name: 'Bánh flan',
    description: 'Bánh flan với caramel',
    source_path: 'banh-flan.md',
    image_path: null,
    category: 'Tráng miệng',
    difficulty: 2,
    tags: ['bánh flan', 'caramel', 'trứng'],
    servings: 6,
    ingredients: [
      { name: 'Trứng gà', quantity: 6, unit: 'quả', text_quantity: '6 quả', notes: '' },
      { name: 'Sữa tươi', quantity: 500, unit: 'ml', text_quantity: '500ml', notes: '' },
      { name: 'Đường', quantity: 150, unit: 'g', text_quantity: '150g', notes: '' },
      { name: 'Vanilla', quantity: 5, unit: 'ml', text_quantity: '5ml', notes: '' },
      { name: 'Nước', quantity: 50, unit: 'ml', text_quantity: '50ml', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Làm caramel với đường và nước' },
      { step: 2, description: 'Đổ caramel vào khuôn' },
      { step: 3, description: 'Đánh trứng với sữa và vanilla' },
      { step: 4, description: 'Lọc hỗn hợp qua rây' },
      { step: 5, description: 'Đổ vào khuôn và hấp' },
      { step: 6, description: 'Để nguội và lật ngược khuôn' }
    ],
    prep_time_minutes: 25,
    cook_time_minutes: 40,
    total_time_minutes: 65,
    additional_notes: ['Cần hấp với lửa nhỏ']
  },
  {
    id: 'trai-cay-dam',
    name: 'Trái cây dầm',
    description: 'Trái cây dầm với sữa đặc',
    source_path: 'trai-cay-dam.md',
    image_path: null,
    category: 'Tráng miệng',
    difficulty: 1,
    tags: ['trái cây', 'dầm', 'sữa'],
    servings: 4,
    ingredients: [
      { name: 'Xoài', quantity: 2, unit: 'quả', text_quantity: '2 quả', notes: '' },
      { name: 'Dưa hấu', quantity: 300, unit: 'g', text_quantity: '300g', notes: '' },
      { name: 'Dứa', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Sữa đặc', quantity: 100, unit: 'ml', text_quantity: '100ml', notes: '' },
      { name: 'Sữa tươi', quantity: 200, unit: 'ml', text_quantity: '200ml', notes: '' },
      { name: 'Đá bào', quantity: 200, unit: 'g', text_quantity: '200g', notes: '' },
      { name: 'Đường', quantity: 30, unit: 'g', text_quantity: '30g', notes: '' }
    ],
    steps: [
      { step: 1, description: 'Thái các loại trái cây thành miếng nhỏ' },
      { step: 2, description: 'Cho trái cây vào tô' },
      { step: 3, description: 'Thêm sữa đặc và sữa tươi' },
      { step: 4, description: 'Thêm đường và khuấy đều' },
      { step: 5, description: 'Thêm đá bào' },
      { step: 6, description: 'Thưởng thức ngay' }
    ],
    prep_time_minutes: 15,
    cook_time_minutes: 0,
    total_time_minutes: 15,
    additional_notes: ['Có thể thêm sầu riêng']
  }
]

// Lấy tất cả các danh mục
function getAllCategories(recipes: Recipe[]): string[] {
  const categories = new Set<string>()
  recipes?.forEach((r) => {
    if (r.category)
      categories.add(r.category)
  })
  return [...categories]
}

export default defineEventHandler(async () => {
  const recipes = vietnameseRecipes
  const categories = getAllCategories(recipes)

  return {
    count: recipes.length,
    categories,
    recipes,
  }
})
