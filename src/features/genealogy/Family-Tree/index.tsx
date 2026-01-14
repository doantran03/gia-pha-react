/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FamilyTree from '@balkangraph/familytree.js';
import { useEffect, useRef } from 'react';
import "./style.scss";

interface Member {
    id: string | number;
    fullname?: string;
    other_name?: string;
    position?: string;
    birth_date?: string;
    gender?: 'nam' | 'nu' | 'other';
    order?: string | number;
    generation?: number;
    address?: string;
    biography?: string;
    death_date?: string;
    feature_image?: string | boolean;
    fid?: string | number | null;
    mid?: string | number | null;
    pids?: (string | number)[];
}

interface ApiResponse {
    data: Member[];
}

interface UrlOptions {
    enableSearch: boolean;
    scaleInitial: number | string;
}

function FamilyTreeNode() {
    const treeRef = useRef<HTMLDivElement>(null);
    const familyInstanceRef = useRef<any>(null);

    const getOptions = (): UrlOptions => {
        const searchParams = new URLSearchParams(window.location.search);
        const fit = searchParams.get('fit');

        if (fit === 'yes') {
            return {
                enableSearch: false,
                scaleInitial: FamilyTree.match.boundary
            };
        }

        return {
            enableSearch: true,
            scaleInitial: 1
        };
    };

    const normalizeMembers = (members: Member[]): Member[] => {
        return members.map(member => {
            const hasImage =
                member.feature_image !== null &&
                member.feature_image !== false &&
                member.feature_image !== "";

            if (!hasImage) {
                const avatar =
                    member.gender === 'nu'
                        ? '/src/assets/images/avatar-nu.jpg'
                        : '/src/assets/images/avatar-nam.jpg';

                return {
                    ...member,
                    feature_image: avatar,
                };
            }

            return member;
        });
    };

    const getMembers = async (familyInstance: any) => {
        const url = "https://api-giapha.py-media.com/wp-json/gia-pha/v1/members";

        try {
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS1naWFwaGEucHktbWVkaWEuY29tIiwiaWF0IjoxNzY4MzU4OTU0LCJuYmYiOjE3NjgzNTg5NTQsImV4cCI6MTc2ODk2Mzc1NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.m255l214xedfmMhJ1j-jQnKtmJMEjTaDzhim8LC-IPw"
                }
            });

            const result: ApiResponse = await res.json();

            const data = normalizeMembers(result.data);

            const rootMember = data.find(m =>
                m.generation === 1 &&
                m.gender === "nam" &&
                m.fid === null &&
                m.mid === null
            );

            if (rootMember) {
                familyInstance.config.roots = [rootMember.id];
            }

            familyInstance.load(data);

        } catch (err) {
            console.error('Error fetching members:', err);
        }
    };

    useEffect(() => {
        if (!treeRef.current) return;

        const options = getOptions();

        const family = new FamilyTree(treeRef.current, {
            mouseScrool: FamilyTree.none,
            scaleInitial: Number(options.scaleInitial),
            mode: 'light',
            template: 'hugo',
            enableSearch: options.enableSearch, 
            nodeMenu: undefined, 
            nodeBinding: { 
                img_0: 'feature_image', 
                field_0: 'fullname', 
                field_1: 'birth_date', 
            }, 
            editForm: { 
                photoBinding: 
                "feature_image", 
                titleBinding: "fullname", 
                generateElementsFromFields: false,
                elements: [
                    { type: 'textbox', label: 'Họ và tên', binding: 'fullname' },
                    { type: 'date', label: 'Ngày sinh', binding: 'birth_date' },
                    [
                        { type: 'select', options: [{ value: 'nam', text: 'Nam' }, { value: 'nu', text: 'Nữ' }, { value: 'other', text: 'Khác' }], label: 'Giới tính', binding: 'gender' },
                        { type: 'textbox', label: 'Thứ tự', binding: 'order' },
                        { type: 'textbox', label: 'Đời', binding: 'generation' },
                    ],
                    { type: 'textbox', label: 'Địa chỉ', binding: 'address' },
                    { type: 'textbox', label: 'Tiểu sử', binding: 'biography' },
                    { type: 'date', label: 'Ngày mất', binding: 'death_date' },
                ]
            },
        });

        // Format birth date
        family.on('field', function (_sender: any, args: any) {
            if (args.name === 'birth_date' && args.value) {
                const date = new Date(args.value);
                if (!isNaN(date.getTime())) {
                    args.value = date.toLocaleDateString();
                }
            }
        });

        familyInstanceRef.current = family;

        getMembers(family);

        return () => {
            familyInstanceRef.current = null;
        };
    }, []);

    return (
        <section className="genealogy">
            <div className="container">
                <div ref={treeRef} id="tree" />
            </div>
        </section>
    );
}

export default FamilyTreeNode;
